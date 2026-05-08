import { useState } from "react"

export default function Navbar({algorithm, setAlgorithm, theme}){
    const [mode, setMode] = useState("sorting")
    return (
        <div className={theme === "dark"
            ? "grid grid-cols-3 items-center px-6 py-4 border-b border-slate-800 bg-slate-900 text-white"
            : "grid grid-cols-3 items-center px-6 py-4 border-b border-slate-200 bg-white text-black"
        }>
        <h2 className="col-start-2 text-center font-semibold">AlgoVisualizer</h2>

        <div className="col-start-3 justify-self-end flex flex-col items-end gap-2">
            <div className="flex gap-2">
                <button className="rounded-md border border-slate-300 px-3 py-2" onClick={() => setMode("sorting")}>Sorting</button>
                <button className="rounded-md border border-slate-300 px-3 py-2" onClick={() => setMode("pathfinding")}>Pathfinding</button>
            </div>
            <select value={algorithm} onChange={(e)=> setAlgorithm(e.target.value)}>
                {mode === "sorting" ? 
                (<>
                <option>Bubble Sort</option>
                <option>Merge Sort</option>
                <option>Quick Sort</option>
                <option>Insertion Sort</option>
                </>
                ):(
                <>
                <option>BFS</option>
                <option>DFS</option>
                <option>Dijkstra</option>
                </>)}
            </select>
        </div>
        </div>
    )
}