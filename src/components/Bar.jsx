export default function Bar({value}){
    return (
        <div className="bar" 
        style={{
            height: `${value}px`,
            width: "100%",
            maxWidth: "30px",
            flex: 1,
            backgroundColor: "teal",
            margin: "0 1px",
        }}
        ></div>
    )
}