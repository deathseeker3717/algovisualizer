import { generateArray } from "../utils/generateArray";
import "../styles/Controls.css"

export default function Controls({setArr, setSize, size, setSpeed, speed, handleStart, isSorting, theme}) {
    return (
        <div className={theme === "🌚" ? "controls controls-dark" : "controls controls-light"}>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 flex gap-2" onClick={()=> setArr(generateArray(size))} disabled={isSorting}>Generate Array</button>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" onClick={handleStart} disabled={isSorting}>Start</button>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 flex gap-2" onClick={()=> setArr(generateArray(size))} disabled={isSorting}>Reset</button>
            <div>
                <label>Speed</label>
                <input type="range" min="1" max="100" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} disabled={isSorting} />
            </div>
            <div>
                <label>Size</label>
                <input type="range" min="1" max="100" value={size} onChange={(e) => setSize(Number(e.target.value))} disabled={isSorting} />
            </div>
        </div>
    )
}