import Wallpaper from "../model/Wallpaper"
import "../index.css"

const Grid = (wallpapers: Wallpaper[]) => {
    return (
        <div className="center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 container sm">
                {wallpapers.map((wallpaper) => (
                    <div>
                        <a href={wallpaper.URL} target="_blank">
                            < img
                                className="h-auto max-w-full rounded-lg border border-gray-200"
                                src={wallpaper.URL}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Grid;