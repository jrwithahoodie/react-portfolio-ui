import React from 'react'

import {NavBar} from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import  ComponentsInitials from '../components/ComponentsInitials/ComponentsInitials'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <ComponentsInitials heading="Contact." text="Contact me for more information!"/>
      <Footer/>
    </div>
  )
}

export default Contact