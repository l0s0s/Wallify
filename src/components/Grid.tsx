import Wallpaper from "../model/Wallpaper"
import "../index.css"

const Grid = (wallpapers: Wallpaper[]) => {
    return (
        <div className="center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 container sm">
                {wallpapers.map((wallpaper) => (
                    <div className="relative group">
                        <a href={wallpaper.URL} target="_blank" className="block">
                            <img
                                className="h-auto max-w-full rounded-lg border border-gray-200"
                                src={wallpaper.URL}
                            />
                            <div className="overlay absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg">
                                <span className="text-white">{wallpaper.Resolution}</span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Grid;