import React from 'react'

import {NavBar} from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import ComponentsInitials from '../components/ComponentsInitials/ComponentsInitials'

const Project = () => {
  return (
    <div>
      <NavBar/>
      <ComponentsInitials heading="PROJECTS." text="Some of my works."/>
      <Footer/>
    </div>
  )
}

export default Project