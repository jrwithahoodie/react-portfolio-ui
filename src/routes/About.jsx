import React from 'react'

import {NavBar} from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import { ComponentsInitials } from '../components/ComponentsInitials/ComponentsInitials'

const About = () => {
  return (
    <div>
      <NavBar/>
      <ComponentsInitials heading="About me" text="Here is some information about me!"/>
      <Footer/>
    </div>
  )
}

export default About