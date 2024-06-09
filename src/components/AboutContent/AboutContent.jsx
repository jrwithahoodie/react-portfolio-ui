import React from 'react'
import { Link } from 'react-router-dom'

import "./AboutContentStyles.css"
import SkillsRow from '../SkillsRow/SkillsRow'

const AboutContent = () => {
    var languages = [
        "HTML5",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Java",
        "Python",
        "C#",
        "SQL",
    ]

    var frameworks = [
        "Angular",
        "React",
        ".NET Core",
        "Entity Framework",
        "Flask",
        "Bootstrap",
        "PyTorch",
        "Anaconda"
    ]

    var ides = [
        "Visual Studio Code",
        "Visual Studio",
        "Eclipse",
        "IntelliJ IDEA",
        "SQL (SSMS)"
    ]

    var tools = [
        "Postman",
        "Swagger",
        "Jupyter",
        "Firebase",
        "GitHub"
    ]

    var other = [
        "Docker",
        "Git",
        "Azure",
        "Azure Deployments",
        "Azure DevOps",
        "Fedora"
    ]

    return (
        <div className="containerContent">
            <div className="aboutInfo">
                <h1>Get to know me!</h1>
                <div className="info">
                    <p>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                </div>
                <div className="buttonContainer">
                    <div>
                        <Link to="/contact" className="btn">Contact Me!</Link>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h1>My skills</h1>
                <div className="info">
                    <SkillsRow skillName={"Languages"} skillLanguage={languages} />
                    <SkillsRow skillName={"Frameworks"} skillLanguage={frameworks} />
                    <SkillsRow skillName={"IDE's"} skillLanguage={ides} />
                    <SkillsRow skillName={"Tools"} skillLanguage={tools} />
                    <SkillsRow skillName={"Others"} skillLanguage={other} />
                </div>
            </div>
        </div>
    )
}


export default AboutContent