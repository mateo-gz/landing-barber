import React from 'react'
import Home from './pages/home'
import Services from './pages/services'
import Gallery from './pages/gallery'
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Home />
      <Services />
      <Gallery />
    </div>
  )
}

export default App