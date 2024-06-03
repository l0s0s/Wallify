import './App.css';
import Grid from './components/Grid'
import Wallpaper from './model/Wallpaper';
import { getWallpapers } from './storage/Wallpaper'
import { useEffect, useState } from "react";

function App() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  useEffect(() => {
    let isMounted = true;
    getWallpapers(0, 20).then((wallpapers: Wallpaper[]) => {
      if (isMounted) {
        console.log(wallpapers)

        setWallpapers(wallpapers);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">

      {Grid(wallpapers)}
    </div>
  );
}

export default App;
