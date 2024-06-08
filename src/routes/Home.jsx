import React from 'react'

import { NavBar } from '../components/NavBar/NavBar'
import Welcome from '../components/Welcome/Welcome'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <NavBar/>
      <Welcome/>
      <Footer/>
    </div>
  )
}

export default Home