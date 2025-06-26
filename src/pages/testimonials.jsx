import React from 'react';
import TestimonialCard from '../components/testimonialCard';

const Testimonials = () => {
  return (
    <section id='testimonials' className="testimonials-section">
      <h2 className="testimonials-title">Lo que dicen los que ya probaron el corte 🔥</h2>
      
      <div className="testimonials-grid">
        <TestimonialCard
          name="Kevin “El fadeado”"
          quote="No me habían dejado tan fresh desde mi graduación. Literal, el fade me cambió la cara."
          img="/img17.jpg"
        />

        <TestimonialCard
          name="Luis G."
          quote="Atención brutal, diseño al gusto y sin esperar. Esta barbería es otra liga."
          img="/img18.jpg"
        />

        <TestimonialCard
          name="El Rulas"
          quote="Nunca pensé que una ceja perfilada me iba a subir el autoestima JAJA. Altamente recomendado."
          img="/img19.jpg"
        />
      </div>
    </section>
  );
};

export default Testimonials;
