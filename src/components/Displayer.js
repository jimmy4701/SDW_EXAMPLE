import React from 'react'

const Displayer = (props) => {
    return(
        <div className="displayer">
            {props.messages.map((current_message) => {
                return <Item message={current_message} />
            })}
        </div>
    )
}

const Item = (props) => {
    return(
        <div className={props.message.type == "A" ? "flexLeft" : "flexRight"}>
            <div className={props.message.type == 'A' ? "item left" : "item right"}>
                <p className="username">{props.message.username}</p>
                <p className="content">{props.message.content}</p>
            </div>
        </div>
    )
}

export default Displayer