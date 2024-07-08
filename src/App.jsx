import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certification from './components/Certification'
import Footer from './components/Footer'
import "./App.css"

const App = () => {
  return (
    <div className='w-full min-h-screen px-4 sm:px-20 bg-[#090917] text-white'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certification />
      <Education />
      <Footer />
    </div>
  )
}

export default App