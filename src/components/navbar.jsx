import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Barber Bros</div>

      <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${open ? 'active' : ''}`}>
        <li><a href="#services" onClick={closeMenu}>Servicios</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Galería</a></li>
        <li><a href="#testimonials" onClick={closeMenu}>Testimonios</a></li>
        <li><a href="#cta" onClick={closeMenu}>Reservar</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
