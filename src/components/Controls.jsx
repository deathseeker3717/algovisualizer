import { generateArray } from "../utils/generateArray";
import "../styles/Controls.css"

export default function Controls({setArr, setSize, size, setSpeed, speed, handleStart, isSorting}) {
    return (
        <div className = "controls">
            <button  onClick={()=> setArr(generateArray(size))} disabled={isSorting}>Generate Array</button>
            <button onClick={handleStart} disabled={isSorting}>Start</button>
            <button >Reset</button>
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