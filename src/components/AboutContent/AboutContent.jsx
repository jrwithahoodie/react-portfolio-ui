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
                    <p>Hello, I'm José Ramón, a junior developer with 2 years of experience in creating web and cross-platform applications. Throughout my career, I have gained solid skills in a variety of front-end and back-end technologies, frameworks, and tools. My focus is on developing efficient and robust solutions that solve real problems and enhance the user experience. During my journey, I have worked on various projects that have allowed me to apply and expand my knowledge. Some of my achievements and certifications include:</p>
                    <br />
                    <ul>
                        <li>
                            <p>
                                <strong>Higher Degree in Cross-Platform Application Development</strong>: This training provided me with a solid foundation in application development and allowed me to acquire practical skills in designing and implementing cross-platform solutions.
                            </p>
                        </li>
                        <li>
                            <p>
                            <strong>"TheUncoding" Certification in OKR and Product Owner</strong>: This certification has given me a better understanding of managing objectives and key results (OKR) and performing the role of Product Owner, enhancing my ability to manage software development projects effectively.
                            </p>
                        </li>
                    </ul>
                    <br />
                    <p>My work approach is based on code quality, efficiency, and collaboration. I enjoy solving complex problems and transforming ideas into functional and aesthetically pleasing products. I am a firm believer in continuous learning and always strive to stay updated with the latest industry trends and best practices.Currently, I am seeking new opportunities and challenges that allow me to grow as a developer and contribute to innovative projects. If you have an idea in mind or just want to connect, feel free to reach out to me.</p>
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