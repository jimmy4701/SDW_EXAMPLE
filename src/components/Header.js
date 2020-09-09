import React from 'react'

const Header = (props) => {
    return <div>
        <div>
            <h1>{props.title}</h1>
        </div>
        <div>
            <p>Texte de présentation</p>
        </div>
    </div>
}

export default Header