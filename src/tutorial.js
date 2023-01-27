import React from "react";
import Header from "./tutorial-components/Header";
import Body from "./tutorial-components/Body";

export default function Tutorial(){

    const [name, setName] = React.useState("Joe")

    function switchUser(){
        setName(
            function(prevState){
                if (prevState === "Joe"){
                    return ("Kevin")
                } else if (prevState !== "Joe"){
                    return ("Joe")
                }
            }
        )
    }

    return(
        <div>
            <Header name = {name}/>
            <Body name = {name}/>
            <button onClick={switchUser}>Switch User</button>
        </div>
    )
}