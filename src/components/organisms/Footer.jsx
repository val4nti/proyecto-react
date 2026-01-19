// src/components/organisms/Footer.jsx
// src/components/organisms/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center mt-5">
      {/* El Mapa como parte del organismo */}
      <div className="container-fluid p-0">
        <div className="ratio ratio-21x9" style={{ minHeight: '300px', backgroundColor: '#333' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0293!2d-70.6131!3d-33.4372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzEzLjMiUyA3MMKwMzYnNDcuMiJX!5e0!3m2!1ses!2scl!4v123456789"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de la tienda"
          ></iframe>
        </div>
      </div>

      {/* Créditos del final */}
      <div className="py-4">
        <p className="mb-0">© 2026 Level-Up Gamer - Proyecto Duoc UC</p>
      </div>
    </footer>
  );
};

export default Footer;