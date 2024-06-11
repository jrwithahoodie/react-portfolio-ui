import React from 'react'

import "./FooterStyles.css"
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerContainer">
            <div className="leftColumn">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Málaga, Spain</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        +34 633 266 354
                    </h4>
                </div>
                <div className="mail">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        jrgxllego@proton.me
                    </h4>
                </div>
            </div>
            <div className="rightColumn">
                <h4>About me</h4>
                <p>
                Hello, I'm José Ramón, a junior developer with 2 years of experience in web and cross-platform applications. Skilled in various front-end and back-end technologies, I focus on creating efficient and robust solutions. With a Higher Degree in Cross-Platform Application Development and a certification in OKR and Product Owner from "TheUncoding," I am always eager to learn and take on new challenges. Let's connect!
                </p>
                <div className="social">
                    <a href="https://www.github.com/jrwithahoodie" className="social-button github">
                        <FaGithub className="cf-icon-svg"></FaGithub>
                    </a>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-ram%C3%B3n-gallego-v%C3%A9lez-92b738242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-button linkedin">
                        <FaLinkedin className="cf-icon-svg"></FaLinkedin>
                    </a>
                    <a href="https://www.instagram.com/jr.withahoodie" className="social-button instagram">
                        <FaInstagram className="cf-icon-svg"></FaInstagram>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer