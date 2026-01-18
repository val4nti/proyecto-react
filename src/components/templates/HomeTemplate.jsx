// src/components/templates/HomeTemplate.jsx
import React from 'react';
import Navbar from '../organisms/Navbar';

export const HomeTemplate = ({ children }) => {
  return (
    <div className="home-template">
      {/* El Organismo Navbar siempre arriba */}
      <header>
        <Navbar />
      </header>

      {/* Espacio para el Banner/Hero (Organismo) */}
      <section className="hero-section bg-dark text-white py-5 text-center mb-4">
        <div className="container">
          <h1 className="display-4 fw-bold">LEVEL-UP GAMER</h1>
          <p className="lead">Las mejores ofertas en videojuegos y consolas.</p>
        </div>
      </section>

      {/* El contenido principal (donde irán las ProductCards) */}
      <main className="container min-vh-100">
        {children}
      </main>

      {/* Footer (podrías hacerlo Organismo después) */}
      <footer className="bg-dark text-light text-center py-4 mt-5">
        <div className="container">
          <p>© 2024 Level-Up Gamer - Proyecto Duoc UC</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeTemplate;