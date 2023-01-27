import React from "react"

export default function Header() {
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
            {/* <h4 className="header--project"></h4> */}
        </div>
    )
}