import React from 'react'
import { Link } from 'react-router-dom'

import "./Welcome.css"
import WelcomeImage from "../../assets/welcome-background.jpg"

const Welcome = () => {
  return (
    <div className="welcome">
        <div className="mask">
            <img src={WelcomeImage} className="welcome-img" alt="Background"/>
        </div>
        <div className="content">
            <p>Hi, Im  full stack dev.</p>
            <h1>React Example.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Welcome