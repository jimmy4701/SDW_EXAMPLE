import React from 'react'

const Button = (props) => {
    return(
        <button 
            {...props}
            className="button" 
            style={{...props}}
        >{props.children}</button>
    )
}

export default Button