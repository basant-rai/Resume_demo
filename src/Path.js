import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/layout/Footer'
import Contact from './components/pages/Contact'
import Experience from './components/pages/Experience'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Skill from './components/pages/Skill'

const Path = () => {
  return (
      <>
      <Router>
          <Home/>
          <Portfolio/>
          <Skill/>
          <Experience/>
          <Contact/>
          <Footer/>
          
      </Router>
      </>
  )
}

export default Path