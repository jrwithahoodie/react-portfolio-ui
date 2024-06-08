import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import "./NavBarStyles.css"

export const NavBar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to='/'>
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "navMenu active" : "navMenu"}>
        <li>
          <Link to='/'>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to='/project'>
            <p>Project</p>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <p>Contact me</p>
          </Link>
        </li>
      </ul>
      <div className="navDisplay" onClick={handleClick}>
        {
          click ?
            (<FaTimes size={20} style={{ color: "#fff" }} />)
            :
            (<FaBars size={20} style={{ color: "#fff" }} />)
        }
      </div>
    </div>
  )
}