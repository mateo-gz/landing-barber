import React from 'react'

const Service = ({title, img, price}) => {
  return (
    <div className='service'>
        <div className="service-title">{title}</div>
        <img src={img} alt="service" className="service-img"></img>
        <div className="service-price">{price}</div>
        <button className='service-btn'>Reservar</button>
    </div>
  )
}

export default Service