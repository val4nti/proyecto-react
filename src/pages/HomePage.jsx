// src/pages/HomePage.jsx

import React from 'react';
import HomeTemplate from '../templates/HomeTemplate';
import HeroCarousel from '../organisms/HeroCarousel';
import CategoryGrid from '../organisms/CategoryGrid';
import ProductCard from '../molecules/ProductCard';
import MobileOffcanvas from '../molecules/MobileOffcanvas';
import Footer from '../organisms/Footer';

const HomePage = () => {
  // Datos simulados basados en tu index.html
  const productosPrincipales = [
    { id: 1, nombre: "Producto 1", precioAntiguo: 0, precioNuevo: 13450, imagen: "https://via.placeholder.com/400x300", link: "#" },
    { id: 2, nombre: "Producto 3", precioAntiguo: 10000, precioNuevo: 7999, imagen: "https://via.placeholder.com/400x300", link: "#" },
    { id: 3, nombre: "Producto 20", precioAntiguo: 7500, precioNuevo: 6000, imagen: "https://via.placeholder.com/400x300", link: "#" },
    { id: 4, nombre: "Producto Especial", precioAntiguo: 12000, precioNuevo: 9990, imagen: "https://via.placeholder.com/400x300", link: "#" },
    { id: 5, nombre: "Control Pro", precioAntiguo: 55000, precioNuevo: 45000, imagen: "https://via.placeholder.com/400x300", link: "#" },
    { id: 6, nombre: "Consola Next-Gen", precioAntiguo: 500000, precioNuevo: 450000, imagen: "https://via.placeholder.com/400x300", link: "#" },
  ];

  const masVistos = [
    { id: 10, nombre: "Zelda: Breath of the Wild", precioAntiguo: 59990, precioNuevo: 45000, imagen: "https://via.placeholder.com/400x300", link: "#" },
    { id: 11, nombre: "Elden Ring", precioAntiguo: 49990, precioNuevo: 39990, imagen: "https://via.placeholder.com/400x300", link: "#" },
    { id: 12, nombre: "Mario Kart 8", precioAntiguo: 45000, precioNuevo: 35000, imagen: "https://via.placeholder.com/400x300", link: "#" },
    { id: 13, nombre: "FIFA 24", precioAntiguo: 55000, precioNuevo: 25000, imagen: "https://via.placeholder.com/400x300", link: "#" },
  ];

  return (
    <HomeTemplate>
      {/* 1. Menú Móvil (Offcanvas) */}
      <MobileOffcanvas />

      {/* 2. Hero / Carrusel (Organismo) */}
      <HeroCarousel />

      {/* 3. Cuadrícula de Categorías (Organismo) */}
      <CategoryGrid />

      {/* 4. Sección de Productos Destacados */}
      <section id="productos" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Nuestros Productos</h2>
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3">
            {productosPrincipales.map((prod) => (
              <ProductCard key={prod.id} {...prod} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sección Los Más Vistos */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Los más vistos</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {masVistos.map((prod) => (
              <ProductCard key={`visto-${prod.id}`} {...prod} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer Final (Organismo con Mapa y fondo Negro) */}
      <Footer />
    </HomeTemplate>
  );
};

export default HomePage;