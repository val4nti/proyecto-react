// src/components/molecules/ProductCard.jsx
import React from 'react';

const ProductCard = ({ nombre, imagen, precioAntiguo, precioNuevo, link }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card card-producto" onClick={() => window.location.href = link} style={{ cursor: 'pointer' }}>
                <img src={imagen} className="card-img-top" alt={nombre} />
                <div className="card-body">
                    <p className="card-title fw-bold">{nombre}</p>
                    <div className="d-flex flex-column mb-3">
                        {/* Precio antiguo con tachado según tu CSS */}
                        <span className="precio-descuento text-decoration-line-through text-muted">
                            ${precioAntiguo.toLocaleString('es-CL')}
                        </span>
                        {/* Precio nuevo destacado */}
                        <span className="precio-nuevo fw-bolder text-warning" style={{ fontSize: '1.4rem' }}>
                            ${precioNuevo.toLocaleString('es-CL')}
                        </span>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Ver Detalle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;