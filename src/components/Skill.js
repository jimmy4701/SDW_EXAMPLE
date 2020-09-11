import React from 'react'

const Skill = (props) => {
    return(
        <div className="skill">
            <img src={props.skill.img} alt="img" />
            <h3>{props.skill.label}</h3>
            <p>{props.skill.description}</p>
        </div>
    )
}

export default Skill