// src/pages/AboutPage.jsx
import React from 'react';
import HomeTemplate from '../templates/HomeTemplate';
import AboutSection from '../organisms/AboutSection';
import Footer from '../organisms/Footer';

const AboutPage = () => {
  return (
    <HomeTemplate>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Organismo principal de la página de nosotros */}
            <AboutSection />
          </div>
        </div>
      </div>

      {/* Reutilizamos el Footer que ya tiene el mapa y el fondo negro */}
      <Footer />
    </HomeTemplate>
  );
};

export default AboutPage;