import { useEffect } from "react"
import Bar from "./Bar"

export default function Visualizer({arr}) {
    return (
        <div>
            <div
            style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                height: "400px",
                marginTop: "40px",
            }}>
                {arr.map((value, index) => (
                    <Bar key={index} value={value} />
                ))}
            </div>
        </div>
    )
}