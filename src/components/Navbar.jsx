import { useState } from "react"
import Shuffle from '../animations/Shuffle';
import "../styles/Navbar.css"

export default function Navbar({algorithm, setAlgorithm, theme, isSorting, setInfo}){
    const [mode, setMode] = useState("sorting")
    return (
        <div className={theme === "🌚"
            ? "grid grid-cols-3 items-center px-6 py-4 border-b border-slate-800 bg-slate-900 text-white"
            : "grid grid-cols-3 items-center px-6 py-4 border-b border-slate-200 bg-white text-black"
        }>

        <Shuffle className="audiowide-regular tracking-[6px]"
            text="Algovisualizer"
            shuffleDirection="right"
            duration={0.55}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover
            respectReducedMotion={true}
            loop={true}
            loopDelay={1}
            />

        <div className="col-start-3 justify-self-end flex flex-col items-end gap-2">
            <div className="flex gap-2">
                <button className="rounded-md border border-slate-300 px-3 py-2 disabled:opacity-50" onClick={() => setMode("sorting")} disabled={isSorting}>Sorting</button>
                <button className="rounded-md border border-slate-300 px-3 py-2 disabled:opacity-50" onClick={() => setMode("pathfinding")} disabled={isSorting}>Pathfinding</button>
            </div>
            <select className="disabled:opacity-50" value={algorithm} onChange={(e)=> setAlgorithm(e.target.value)} disabled={isSorting}>
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
            <button
            className="rounded-md border border-slate-300 px-3 py-2 disabled:opacity-50"
            onClick={() => setInfo(true)}
            disabled={isSorting}>
    Info
    </button>
        </div>
        </div>
    )
}