import { useState } from "react"

export default function Navbar({algorithm, setAlgorithm, theme, toggleTheme}){
    const [mode, setMode] = useState("sorting")
    return (
        <div className={theme === "dark"
            ? "flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900 text-white"
            : "flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white text-black"
        }>
        <h2>AlgoVisualizer</h2>

        <button className="rounded-md border border-slate-300 px-3 py-2" onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

        <div className="nav-controls">
            <div>
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