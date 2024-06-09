import React from 'react'

import {NavBar} from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import  ComponentsInitials from '../components/ComponentsInitials/ComponentsInitials'
import {ContactContent} from '../components/ContactContent/ContactContent'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <ComponentsInitials heading="Contact." text="Contact me for more information!"/>
      <ContactContent/>
      <Footer/>
    </div>
  )
}

export default Contact