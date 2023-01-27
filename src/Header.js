import React from "react"

export default function Header(props) {
    return (
        <div className="header">
            <a href="index.html" className="header-link">
            <img 
                src="./logo192.png" 
                className="header--image"
                alt="logo"
            />
            </a>
            <h2 className="header--title">Meme Generator</h2>
            
            <div className="hamburger" onClick={props.onClick}>
                    <i className="fa fa-bars"/>
                    <i className="fa fa-close"/>
            </div>
            {/* <h4 className="header--project"></h4> */}
        </div>
    )
}