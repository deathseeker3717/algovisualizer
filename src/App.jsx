import { useState,useEffect } from "react"
import Navbar from "./components/Navbar"
import Controls from "./components/Controls"
import Visualizer from "./components/Visualizer"
import { generateArray } from "./utils/generateArray"
import { animateSorting } from "./animations/animateSorting"
import { bubbleSort } from "./algorithms/sorting/bubbleSort"
import { mergeSort } from "./algorithms/sorting/mergeSort"
import { quickSort } from "./algorithms/sorting/quickSort"
import { insertionSort } from "./algorithms/sorting/insertionSort"

function App() {
  const [size,setSize] = useState(20)
  const [arr,setArr] = useState([])
  const [speed,setSpeed] = useState(50)
  const [algorithm, setAlgorithm] = useState("Bubble Sort")
  const [isSorting, setIsSorting] = useState(false)

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const handleStart = () => {
    setIsSorting(true)
    let animations = []
    switch(algorithm) {
      case "Bubble Sort":
        bubbleSort(arr, animations)
        break;
      case "Merge Sort":
        mergeSort(arr, animations)
        break;
      case "Quick Sort":
        quickSort(arr, animations)
        break;
      case "Insertion Sort":
        insertionSort(arr, animations)
        break;
    }
    animateSorting(animations, speed);
    setIsSorting(false);
  }

  useEffect(() => {
    setArr(generateArray(size))
  },[size])

  return (
    <div className={theme === "dark" 
    ? "min-h-screen bg-slate-950 text-white" 
    : "min-h-screen bg-white text-black"}>
      <Navbar algorithm={algorithm} setAlgorithm={setAlgorithm} theme={theme} />

<div className="flex items-start justify-between px-6 py-4">
  <Controls setArr={setArr} setSize={setSize} size={size} setSpeed={setSpeed} speed={speed} handleStart={handleStart} isSorting={isSorting}
  />
  <button 
    className="rounded-md border border-slate-300 px-4 py-2"
    onClick={toggleTheme}
  >
    {theme === "light" ? "Dark Mode" : "Light Mode"}
  </button>
</div>

<Visualizer arr={arr} speed={speed} />

    </div>
  )
}

export default App
