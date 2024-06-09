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
                        <p>123 asdf</p>
                        <p>Spain</p>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit tenetur fugit beatae sapiente? Delectus, eveniet dignissimos nihil non consectetur deserunt impedit sint earum explicabo cupiditate officiis. At, eum voluptate?
                </p>
                <div className="social">
                    <FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <FaGithub size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <FaInstagram size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer