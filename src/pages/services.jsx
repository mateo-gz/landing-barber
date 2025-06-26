import React from 'react'
import Service from '../components/service'

const Services = () => {
  return (
    <div className='services'>
      <Service
      title={"Recorte Con Tijeras"}
      desc={"Un corte de cabello con tijeras es un estilo clásico y versátil que se adapta a diferentes formas de rostro y tipos de cabello. Este método permite una mayor precisión y control en el corte, lo que resulta en un acabado más natural y personalizado."}
      price={"$20"}
      img={'/public/img2.png'}
      />
      <Service
      title={"Recorte Con Maquina"}
      desc={"Un corte de cabello con máquina es un estilo moderno y práctico que se caracteriza por su rapidez y precisión. Este método utiliza una máquina cortadora eléctrica para lograr un acabado uniforme y limpio. Es ideal para mantener un look fresco y ordenado, especialmente en cortes cortos o rapados."}
      price={"$15"}
      img={'/public/img3.png'}
      />
      <Service
      title={"Arreglos de Barba y Bigote"}
      desc={"El arreglo de barba es un servicio especializado que se centra en el cuidado y mantenimiento de la barba y bigote. Incluye el recorte, perfilado y estilizado de la barba y bigote para lograr un look limpio y definido."}
      price={"$10"}
      img={'/public/img6.png'}
      />
      <Service
      title={"Disenos en Pelo"}
      desc={"Los diseños en el cabello son una forma creativa de expresión personal que implica la creación de patrones, formas o imágenes en el cabello. Estos diseños se pueden lograr mediante técnicas de corte, afeitado o teñido, y son populares entre aquellos que buscan un estilo único y llamativo."}
      price={"$25"}
      img={'/public/img4.png'}
      />
    </div>
  )
}

export default Services