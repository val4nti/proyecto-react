
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaProductos from './components/ListaProductos';
import ProductoComponent from './components/ProductoComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/add-producto" element={<ProductoComponent />} />
        <Route path="/edit-producto/:id" element={<ProductoComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;