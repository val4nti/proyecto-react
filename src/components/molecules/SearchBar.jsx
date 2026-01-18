// src/components/molecules/SearchBar.jsx
import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export const SearchBar = ({ onSearch }) => {
  return (
    <div className="d-flex w-100" style={{ maxWidth: '500px' }}>
      {/* Usamos el átomo Input */}
      <Input 
        type="search" 
        placeholder="Buscar juegos, consolas y más..." 
        className="me-2"
      />
      {/* Usamos el átomo Button con un icono de Bootstrap */}
      <Button 
        text={<i className="bi bi-search"></i>} 
        variant="outline-success" 
        onClick={onSearch}
      />
    </div>
  );
};

export default SearchBar;