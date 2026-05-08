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
import "./styles/App.css"

function App() {
  const [size,setSize] = useState(20)
  const [arr,setArr] = useState([])
  const [speed,setSpeed] = useState(50)
  const [algorithm, setAlgorithm] = useState("Bubble Sort")
  const [isSorting, setIsSorting] = useState(false)

  const [theme, setTheme] = useState("☀️");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "☀️" ? "🌚" : "☀️"));
  }

  const handleStart = () => {
    setIsSorting(true)
    let animations = []
    const arrCopy = arr.slice();
    switch(algorithm) {
      case "Bubble Sort":
        bubbleSort(arrCopy, animations)
        break;
      case "Merge Sort":
        mergeSort(arrCopy, animations)
        break;
      case "Quick Sort":
        quickSort(arrCopy, animations)
        break;
      case "Insertion Sort":
        insertionSort(arrCopy, animations)
        break;
    }
    
    // Invert the speed so a slider value of 100 means 1ms delay (fastest)
    const delay = 101 - speed;
    animateSorting(animations, delay);
    
    // Give the final green flash enough time to finish before allowing React to re-render
    const totalAnimationTime = animations.length === 0 ? 0 : (animations.length * delay) + (arrCopy.length * 20);
    
    setTimeout(() => {
      setIsSorting(false);
      setArr(arrCopy); // Update state to match the final sorted array!
    }, totalAnimationTime);
  }

  useEffect(() => {
    setArr(generateArray(size))
  },[size])

  return (
    <div className={theme === "🌚" 
    ? "min-h-screen bg-slate-950 text-white" 
    : "min-h-screen bg-white text-black"}>
      <Navbar algorithm={algorithm} setAlgorithm={setAlgorithm} theme={theme} isSorting={isSorting} />

<div className="flex items-start justify-between px-6 py-4">
  <Controls setArr={setArr} setSize={setSize} size={size} setSpeed={setSpeed} speed={speed} handleStart={handleStart} isSorting={isSorting}
  />
  <button 
    className="theme-toggle rounded-md border border-slate-300 px-3 py-2"
    onClick={toggleTheme}
  >
    {theme === "☀️" ? "🌚" : "☀️ "}
  </button>
</div>

<Visualizer arr={arr} speed={speed} />

    </div>
  )
}

export default App
