import { useEffect } from "react"
import Bar from "./Bar"

export default function Visualizer({arr}) {
    return (
        <div className="flex justify-center w-full px-4">
            <div
            style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                height: "400px",
                marginTop: "40px",
                width: "100%",
                maxWidth: "1200px"
            }}>
                {arr.map((value, index) => (
                    <Bar key={index} value={value} />
                ))}
            </div>
        </div>
    )
}