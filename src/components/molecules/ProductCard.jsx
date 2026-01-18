// src/components/molecules/ProductCard.jsx
import React from 'react';
import Button from '../atoms/Button'; // Importamos tu átomo

const ProductCard = ({ nombre, imagen, precioAntiguo, precioNuevo, link }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card card-producto" style={{ cursor: 'pointer' }}>
                <img src={imagen} className="card-img-top" alt={nombre} />
                <div className="card-body">
                    <p className="card-title fw-bold text-dark">{nombre}</p>
                    
                    <div className="d-flex flex-column mb-3">
                        {/* Precio antiguo */}
                        <span className="precio-descuento text-decoration-line-through text-muted">
                            ${precioAntiguo.toLocaleString('es-CL')}
                        </span>
                        {/* Precio nuevo */}
                        <span className="precio-nuevo fw-bolder text-warning" style={{ fontSize: '1.4rem' }}>
                            ${precioNuevo.toLocaleString('es-CL')}
                        </span>
                    </div>

                    <div className="d-grid">
                        {/* USAMOS TU ÁTOMO BUTTON AQUÍ */}
                        <Button 
                            text="Ver Detalle" 
                            variant="primary" 
                            onClick={() => window.location.href = link} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;