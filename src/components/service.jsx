import React from 'react'

const Service = ({title, desc, img, price}) => {
  return (
    <div className='service'>
        <div className="service-title">{title}</div>
        <p className="service-desc">{desc}</p>
        <img src={img} alt="service" className="service-img"></img>
        <div className="service-price">{price}</div>
        <button className='service-btn'>Reservar</button>
    </div>
  )
}

export default Service