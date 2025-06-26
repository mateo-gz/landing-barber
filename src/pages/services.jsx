import React from 'react'
import Service from '../components/service'

const Services = () => {
  return (
    <div className='services'>
      <Service
      title={"Recorte Con Tijeras"}
      price={"$20"}
      img={'/img2.png'}
      />
      <Service
      title={"Recorte Con Maquina"}

      price={"$15"}
      img={'/img3.png'}
      />
      <Service
      title={"Arreglos de Barba y Bigote"}
      price={"$10"}
      img={'/img6.png'}
      />
      <Service
      title={"Disenos en Pelo"}
      price={"$25"}
      img={'/img4.png'}
      />
    </div>
  )
}

export default Services