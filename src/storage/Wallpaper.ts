import Wallpaper from "../model/Wallpaper"
import { db } from "./Firebase";
import {
  collection,
  query,
  getDocs,
  limit,
  startAt,
  orderBy,
} from "firebase/firestore";

const collectionName = "wallpapers";

export const getWallpapers = async (skp: number, lmt: number) => {
  const querySnapshot = await getDocs(
    query(
      collection(db, collectionName),
      orderBy("CreatedAt"),
      limit(lmt),
      startAt(skp),
    ),
  );

  console.log(querySnapshot.size)

  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
  }) as Wallpaper);
};