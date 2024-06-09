import React from 'react'

import { NavBar } from '../components/NavBar/NavBar'
import Welcome from '../components/Welcome/Welcome'
import Footer from '../components/Footer/Footer'
import AboutContent from '../components/AboutContent/AboutContent'
import {ContactContent} from '../components/ContactContent/ContactContent'

function Home() {
  return (
    <div>
      <NavBar/>
      <Welcome/>
      <AboutContent/>
      <ContactContent/>
      <Footer/>
    </div>
  )
}

export default Home