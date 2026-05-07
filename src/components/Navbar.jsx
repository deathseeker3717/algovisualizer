import { useState } from "react"

export default function Navbar({algorithm, setAlgorithm}){
    const [mode, setMode] = useState("sorting")
    return (
        <div className="navbar">
        <h2>AlgoVisualizer</h2>

        <div className="nav-controls">
            <div>
                <button onClick={() => setMode("sorting")}>Sorting</button>
                <button onClick={() => setMode("pathfinding")}>Pathfinding</button>
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