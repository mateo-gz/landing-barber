import React from 'react';

const TestimonialCard = ({ name, quote, img }) => {
  return (
    <div className="testimonial-card">
      <img src={img} alt={`Foto de ${name}`} className="testimonial-img" />
      <p className="testimonial-quote">“{quote}”</p>
      <h4 className="testimonial-name">– {name}</h4>
    </div>
  );
};

export default TestimonialCard;
