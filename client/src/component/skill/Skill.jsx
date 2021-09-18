import React from 'react'
import './skill.css'

function Skill(props) {
    return (
        <div className="content">
            <h3 className="skill">{props.name}</h3>
        </div>
    )
}

export default Skill
