// src/components/molecules/CartButton.jsx
import Button from '../atoms/Button';

const CartButton = () => {
  return (
    <Button
      text="Carrito $5.000"
      variant="success"
      icon="bi-cart-fill"
    />
  );
};

export default CartButton;
