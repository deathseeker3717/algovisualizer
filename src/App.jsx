import { useState,useEffect } from "react"
import Navbar from "./components/Navbar"
import Controls from "./components/Controls"
import Visualizer from "./components/Visualizer"
import { generateArray } from "./utils/generateArray"

function App() {
  const [size,setSize] = useState(20)
  const [arr,setArr] = useState([])
  const [speed,setSpeed] = useState(50)
  const [algorithm, setAlgorithm] = useState("Bubble Sort")
  const handleStart = () => { console.log("Starting visualization...") }

  useEffect(() => {
    setArr(generateArray(size))
  },[size])

  return (
    <div>
      <Navbar algorithm={algorithm} setAlgorithm={setAlgorithm} />
      <Controls setArr={setArr} setSize={setSize} size={size} setSpeed={setSpeed} speed={speed} handleStart={handleStart} />
      <Visualizer arr={arr} speed={speed} />
    </div>
  )
}

export default App
