import './App.css';
import Grid from './components/Grid'
import Wallpaper from './model/Wallpaper';
import { getWallpapers, Filter } from './storage/Wallpaper'
import { useEffect, useState } from "react";

function App() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const [selectedResoulitions, setSelectedResoulitions] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


  const filter: Filter = {
    Categories: selectedCategories,
    Resolutions: selectedResoulitions
  }

  useEffect(() => {
    let isMounted = true;
    getWallpapers(0, 20, filter).then((wallpapers: Wallpaper[]) => {
      if (isMounted) {
        console.log(wallpapers)

        setWallpapers(wallpapers);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [selectedCategories, selectedResoulitions]);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleResoulition = (resolution: string) => {
    if (selectedResoulitions.includes(resolution)) {
      setSelectedResoulitions(selectedResoulitions.filter((r) => r !== resolution));
    } else {
      setSelectedResoulitions([...selectedResoulitions, resolution]);
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h2>Resoulitions</h2>
        <ul>
          <li onClick={() => toggleResoulition("1920x1080")}>
            <input type="checkbox" checked={selectedResoulitions.includes("1920x1080")} readOnly /> 1920x1080
          </li>
          <li onClick={() => toggleResoulition("3840x2160")}>
            <input type="checkbox" checked={selectedResoulitions.includes("3840x2160")} readOnly /> 3840x2160
          </li>
        </ul>
        <h2>Categories</h2>
        <ul>
          <li onClick={() => toggleCategory("sci-fi")}>
            <input type="checkbox" checked={selectedCategories.includes("sci-fi")} readOnly /> Sci-Fi
          </li>
          <li onClick={() => toggleCategory("room")}>
            <input type="checkbox" checked={selectedCategories.includes("room")} readOnly /> Room
          </li>
          <li onClick={() => toggleCategory("retro")}>
            <input type="checkbox" checked={selectedCategories.includes("retro")} readOnly /> Retro
          </li>
          <li onClick={() => toggleCategory("nature")}>
            <input type="checkbox" checked={selectedCategories.includes("nature")} readOnly /> Nature
          </li>
          <li onClick={() => toggleCategory("city")}>
            <input type="checkbox" checked={selectedCategories.includes("city")} readOnly /> City
          </li>
          <li onClick={() => toggleCategory("pixelart")}>
            <input type="checkbox" checked={selectedCategories.includes("pixelart")} readOnly /> Pixel art
          </li>
          <li onClick={() => toggleCategory("cyberpunk")}>
            <input type="checkbox" checked={selectedCategories.includes("cyberpunk")} readOnly /> Cyberpunk
          </li>
        </ul>
      </div>
      <div className="content">
        {Grid(wallpapers)}
      </div>
    </div>
  );
}

export default App;
