// src/components/organisms/CartManager.jsx
import React, { useState, useEffect } from "react";
import CartItemRow from "../molecules/CartItemRow";
import Button from "../atoms/Button";

const CartManager = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateQuantity = (id, delta) => {
    const newCart = cart
      .map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2>Tu Carrito</h2>

      <div className="row">
        <div className="col-md-8">
          {cart.length === 0 && (
            <p className="text-muted">Tu carrito está vacío.</p>
          )}

          {cart.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onDecrease={() => updateQuantity(item.id, -1)}
              onIncrease={() => updateQuantity(item.id, 1)}
            />
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

            <Button
              text="Pagar Ahora"
              variant="primary"
              onClick={() => alert("¡Compra exitosa!")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartManager;
