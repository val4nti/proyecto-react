// src/components/molecules/CategoryDropdown.jsx
import React from 'react';

const CategoryDropdown = () => {
  const categories = ["Acción", "Aventura", "Estrategia"];

  return (
    <li className="nav-item dropdown">
      <a 
        className="nav-link dropdown-toggle" 
        href="#" 
        role="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
      >
        Categorías
      </a>
      <ul className="dropdown-menu">
        {categories.map((cat, index) => (
          <li key={index}>
            <a className="dropdown-item" href="/categorias.html">{cat}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CategoryDropdown;