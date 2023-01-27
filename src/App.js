import React from "react"
import Header from "./Header"
import Meme from "./Meme"
import Preloader from "./Preloader"
// import Form from "./tutorial3-form"
// import Tutorial from "./tutorial"
// import Tutorial2 from "./tutorial-2"
export default function App() {
    const [appSettings, setAppSettings] = React.useState({menuShow: false})

    function hamburger(){
        // alert("hi")
        document.querySelector(".container").scrollTo(
            {
                top: 0,
                left: 0,
                behavior: "smooth"
            }
        )
        setAppSettings(function(prevState){
            return (
                {...prevState, menuShow: !prevState.menuShow}
            )
        })
    }

    return (
        <div className={appSettings.menuShow ? "container menu-show" : "container"}>
            <Preloader />
            <Header onClick={hamburger}/>
            <Meme onClick={hamburger}/>
            {/* <Tutorial /> */}
            {/* <Tutorial2 darkMode = {false}/> */}
            {/* <Form /> */}
        </div>
    )
}