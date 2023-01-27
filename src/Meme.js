import React from "react"
import memesData from "./memesData"

    export default function Meme() {
        const[memeHeight, setMemeHeight] = React.useState(false)

        const [memeData, setMemeData] = React.useState({
            topText : "",
            bottomText : "",
            memeUrl: "logo192.png"
        })

        // const [allMemeImages, setAllMemeImages] = React.useState(memesData)

        function handleChange(event){
            // alert("hi")
            const {name, value} = event.target
            setMemeData(
                function(prevState){
                    return (
                        {...prevState, [name]: value}
                    )
                }
            )
            console.log(memeData)
        }

        
        function getMemeData() {
            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            setMemeData(function(prevState){
                return (
                    {...prevState  ,memeUrl: memesArray[randomNumber].url}
                )
            })
            setMemeHeight(true)
        }

        function resetMeme(){
            // setMemeData({})
            setMemeHeight(false)
        }

        
        return (
            <main>
                <div className="form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top text"
                        className="form--input"
                        onChange={handleChange}
                        value ={memeData.topText}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        className="form--input"
                        onChange={handleChange}
                        value ={memeData.bottomText}
                    />
                    <button 
                        className="form--button"
                        onClick={getMemeData}
                    >
                        Get a new meme image 🖼
                        <div className="info">
                            <i className="fa fa-info"/>
                        </div>
                    </button>
                </div>
                <div className={memeHeight ? "meme full" : "meme empty"}>
                    {
                    <div className="meme-holder"> 
                    <img src = {memeData.memeUrl} className="meme--image" alt="meme"/>
                    {memeData.topText && <div className="topText">{memeData.topText}</div>}
                    {memeData.bottomText && <div className="bottomText">{memeData.bottomText}</div>}
                    </div>
                    }
                    { <div className="controls">
                        <button className="reset-meme" onClick={resetMeme}>Reset</button>
                        <a download="meme" href={memeData.memeUrl} rel= "noreferrer" className="download-meme" target="_blank"><i className="fa fa-download"/></a>
                    </div>}
                </div>
            </main>
        )
    }