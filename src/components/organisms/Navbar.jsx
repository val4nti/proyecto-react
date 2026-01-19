// src/components/organisms/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white flex-column p-0 shadow-sm">
      {/* PRIMERA FILA: Logo, Buscador y Botones de Acceso */}
      <div className="container-fluid py-2 border-bottom">
        <a className="navbar-brand d-flex align-items-center" href="/">
          {/* Tu logo oficial de GitHub */}
          <img 
            src="https://avatars.githubusercontent.com/u/138630362" 
            alt="Logo" 
            style={{ width: '45px', height: '45px', borderRadius: '50%' }} 
          />
          <span className="ms-2 fw-bold text-dark fs-4">LEVEL-UP GAMER</span>
        </a>
        
        <div className="collapse navbar-collapse justify-content-center">
          <form className="d-flex w-50" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar productos..." />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>

        <div className="d-flex">
          <button className="btn btn-outline-primary ms-2">Iniciar Sesión</button>
          <button className="btn btn-primary ms-2">Crear Cuenta</button>
        </div>
      </div>

      {/* SEGUNDA FILA: Menú de Navegación y Carrito */}
      <div className="w-100 bg-light py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4 fw-bold">
            <a href="/" className="text-decoration-none text-dark border-bottom border-primary border-3">Home</a>
            <a href="#" className="text-decoration-none text-muted">Categorías</a>
            <a href="#" className="text-decoration-none text-muted">Ofertas</a>
            <a href="#" className="text-decoration-none text-muted">Nosotros</a>
            <a href="#" className="text-decoration-none text-muted">Blog</a>
            <a href="#" className="text-decoration-none text-muted">Contacto</a>
          </div>
          
          {/* Botón de Carrito verde esmeralda */}
          <button className="btn btn-success d-flex align-items-center gap-2 px-3 fw-bold">
            <i className="bi bi-cart-fill"></i> 
            <span>Carrito <strong>$5.000</strong></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;