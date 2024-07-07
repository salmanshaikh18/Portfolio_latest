import React from 'react'
import Header from './components/Header'
import About from './components/About'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-[#090917] text-white'>
      <Header />
      <About />
    </div>
  )
}

export default App