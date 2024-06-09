import React from 'react'

import "./SkillsRowStyles.css"

const itemCard = (text) => {
    return (
        <p>{text}</p>
    )
}
function SkillsRow({ skillName, skillLanguage }) {
    return (
        <div>
            <h2>{skillName}</h2>
            <div className="skillsContainer">
                {skillLanguage.map((skill) => {
                    return <div className="card">
                        <p>{skill}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SkillsRow