import React from 'react'

import { NavBar } from '../components/NavBar/NavBar'
import Welcome from '../components/Welcome/Welcome'
import Footer from '../components/Footer/Footer'
import AboutContent from '../components/AboutContent/AboutContent'
import {ContactContent} from '../components/ContactContent/ContactContent'
import HomeSectionDivider from '../components/HomeSectionDivider/HomeSectionDivider'

function Home() {
  return (
    <div>
      <NavBar/>
      <Welcome/>
      <HomeSectionDivider SectionTitle="ABOUT ME."/>
      <AboutContent/>
      <HomeSectionDivider SectionTitle="CONTACT ME."/>
      <ContactContent/>
      <Footer/>
    </div>
  )
}

export default Home