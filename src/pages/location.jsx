import React from 'react';

const Location = () => {
  return (
    <section className="location-section">
      <h2 className="location-title">📍 ¿Dónde estamos?</h2>

      <p className="location-text">
        Barber Bros está en <strong>Zona 3, Guatemala</strong>, a 2 cuadras del colegio tal.
      </p>

      <a
        href="https://www.google.com/maps?q=Barber+Bros+Guatemala"
        target="_blank"
        rel="noopener noreferrer"
        className="location-btn"
      >
        Ver en Google Maps
      </a>
    </section>
  );
};

export default Location;
