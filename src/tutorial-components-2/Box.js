import React from "react";

export default function Box(props){
    // const [isOn, setIsOn] = React.useState(props.on)
    
    const styling = {
        backgroundColor : props.on ? "#222222" : "transparent"
    }

    return(
        <div className="box" style={styling} onClick ={()=>{
            props.toggle(props.id)
        }}>

        </div>
    )
}