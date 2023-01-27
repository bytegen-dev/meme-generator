import React from "react";
import Box from "./tutorial-components-2/Box";
import boxes from "./tutorial-components-2/boxes";

export default function Tutorial2(props){
    const [items, setItems] = React.useState(boxes)

    function toggle(id){
        console.log(id)
        setItems (function(prevState){
            return (
                prevState.map((item)=>{
                    return (item.id === id ? {...item, on : !item.on} : item)
                })
            )
        }
        //     function(prevState){
        //     const updatedItems = []
        //     for (let i=0; i < prevState.length; i++){
        //         const currentItem = prevState[i]
        //         if( currentItem.id === id){
        //             const newItem = {...currentItem, on : !currentItem.on }
        //             updatedItems.push(newItem)
        //             console.log(updatedItems)
        //         } else{
        //             updatedItems.push(currentItem)
        //         }
        //     }

        //     return updatedItems
        // }
        )
    }

    const boxesExec = items.map((box) =>{
        return (
        <Box id={box.id} key = {box.id} on = {box.on} darkMode = {props.darkMode} toggle = {toggle}/>
        )
    }) 
    
    return(
        <div>
            <h2>Tutorial 2 - Boxes will go here</h2>
            {boxesExec}
        </div>
    )
}