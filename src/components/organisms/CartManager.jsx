// src/components/organisms/CartManager.jsx
import React, { useState, useEffect } from 'react';

const CartManager = () => {
    const [cart, setCart] = useState([]);

    // Cargar carrito desde el localStorage al iniciar
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const updateQuantity = (id, delta) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                const newQty = Math.max(0, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }).filter(item => item.quantity > 0);
        
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="container mt-5">
            <h2>Tu Carrito</h2>
            <div className="row">
                <div className="col-md-8">
                    {cart.map(item => (
                        <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 p-3 border rounded">
                            <div className="d-flex align-items-center">
                                <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '15px' }} />
                                <div>
                                    <h6 className="mb-0">{item.name}</h6>
                                    <small className="text-muted">${item.price.toLocaleString()}</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span className="mx-3">{item.quantity}</span>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4">
                    <div className="card p-3 shadow-sm">
                        <h5>Resumen de Compra</h5>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <span>Total:</span>
                            <span className="fw-bold">${total.toLocaleString()}</span>
                        </div>
                        <button className="btn btn-primary w-100 mt-3" onClick={() => alert('¡Compra Exitosa!')}>
                            Pagar Ahora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartManager;