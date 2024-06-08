import React from 'react'

import { NavBar } from '../components/NavBar/NavBar'
import Welcome from '../components/Welcome/Welcome'

function Home() {
  return (
    <div>
      <NavBar/>
      <Welcome/>
    </div>
  )
}

export default Home