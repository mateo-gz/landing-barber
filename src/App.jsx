import React from 'react'
import Home from './pages/home'
import Services from './pages/services'
import Gallery from './pages/gallery'
import Testimonials from './pages/testimonials'
import Navbar from './components/navbar'
import CTA from './pages/cta'
import Location from './pages/location'
import Footer from './pages/footer'
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
      <Location />
      <Footer />
    </div>
  )
}

export default App