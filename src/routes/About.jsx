import React from 'react'

import {NavBar} from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import  ComponentsInitials  from '../components/ComponentsInitials/ComponentsInitials'
import AboutContent from '../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar/>
      <ComponentsInitials heading="About me" text="Here is some information about me!"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About