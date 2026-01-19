// src/components/templates/HomeTemplate.jsx
// src/components/templates/HomeTemplate.jsx
import React from 'react';
import Navbar from '../organisms/Navbar';

const HomeTemplate = ({ children }) => {
  return (
    <div className="home-template">
      {/* ORGANISMO FIJO: Navbar */}
      <header>
        <Navbar />
      </header>

      {/* CONTENIDO DINÁMICO: 
          Aquí se inyectarán los Organismos que faltaban:
          (HeroCarousel, CategoryGrid, ProductSections, RegisterForm, Footer)
      */}
      <main>
        {children}
      </main>

      {/* footer 
      */}
    </div>
  );
};

export default HomeTemplate;