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
    <div>
      <Navbar algorithm={algorithm} setAlgorithm={setAlgorithm} />
      <Controls setArr={setArr} setSize={setSize} size={size} setSpeed={setSpeed} speed={speed} handleStart={handleStart} isSorting={isSorting} />
      <Visualizer arr={arr} speed={speed} />
    </div>
  )
}

export default App
