// src/components/atoms/Button.jsx
import React from 'react';

// Este es tu átomo. Recibe 'text' para el nombre y 'onClick' para la acción.
export const Button = ({ text, onClick, type = "button", variant = "primary", className = "" }) => {
  return (
    <button 
      type={type} 
      // Usamos las clases que ya tienes en tu style.css y Bootstrap
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

//import Button from './components/atoms/Button';

// Para el Registro
//<Button text="Guardar" variant="primary" onClick={handleGuardar} />

// Para el Carrito
//<Button text="Eliminar" variant="danger" />