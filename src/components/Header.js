import React from 'react'

const Header = (props) => {
    return <div 
        className="header" 
        style={{backgroundImage: "url(" + (props.imageUrl || "https://wallpaperaccess.com/full/123346.jpg" ) + ")"}}
    >
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button onClick={props.onClick}>{props.buttonText}</button>
    </div>
}

export default Header