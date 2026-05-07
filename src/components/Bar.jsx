export default function Bar({value}){
    return (
        <div className="bar" 
        style={{
            height: `${value}px`,
            width: "20px",
            backgroundColor: "teal",
            margin: "2px",
        }}
        ></div>
    )
}