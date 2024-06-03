import Wallpaper from "../model/Wallpaper"
import { db } from "./Firebase";
import {
  collection,
  query,
  getDocs,
  limit,
  startAt,
  orderBy,
  where,
  QueryFieldFilterConstraint
} from "firebase/firestore";

const collectionName = "wallpapers";

export type Filter = {
  Resolutions: string[]
  Categories: string[]
};

const getFilterConditions = (filter: Filter) => {
  let conditions: QueryFieldFilterConstraint[] = []
  
  if (filter.Resolutions.length != 0) {
    conditions.push(where("Resolution", "in", filter.Resolutions))
  }

  if (filter.Categories.length != 0) {
    conditions.push(where("Tags", "array-contains-any", filter.Categories))
  }

  return conditions
};

export const getWallpapers = async (filter: Filter) => {  
  const querySnapshot = await getDocs(
    query(
      collection(db, collectionName),
      orderBy("CreatedAt"),
      ...getFilterConditions(filter)
    ),
  );

  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
  }) as Wallpaper);
};