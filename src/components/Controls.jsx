import { generateArray } from "../utils/generateArray";

export default function Controls({setArr, setSize, size, setSpeed, speed, handleStart}) {
    return (
        <div>
            <button onClick={()=> setArr(generateArray(size))}>Generate Array</button>
            <button onClick={handleStart}>Start</button>
            <button>Reset</button>
            <div>
                <label>Speed</label>
                <input type="range" min="1" max="100" value={speed} onChange={(e) => setSpeed(Number(e.target.value))}/>
            </div>
            <div>
                <label>Size</label>
                <input type="range" min="1" max="100" value={size} onChange={(e) => setSize(Number(e.target.value))}/>
            </div>
        </div>
    )
}