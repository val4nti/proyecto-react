import React from 'react';

export const Input = ({ type = "text", placeholder, name, value, onChange, className = "" }) => {
  return (
    <input 
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-control ${className}`} // Clase de Bootstrap que ya usas
    />
  );
};

export default Input;