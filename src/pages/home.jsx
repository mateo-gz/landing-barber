import React from 'react'

const Home = () => {
  return (
    <div className='hero'>
        <h1 className="hero-title">
            BARBER BROS
        </h1>
        <img className='hero-img' src="/img1.png"/>
        <p className="hero-description">
            Barber Bros Corte con actitud. Flow garantizado. Donde los hombres vienen a afilar su estilo. Degradados limpios, barbas precisas y el trato de hermanos.
        </p>
        <button className='hero-btn'>
            Tu nuevo look empieza aquí.
        </button>
    </div>
  )
}

export default Home