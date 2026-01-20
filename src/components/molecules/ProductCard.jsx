// src/components/molecules/ProductCard.jsx
import Image from "../atoms/Image";
import Button from "../atoms/Button";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="card h-100 shadow-sm">
      <Image src={image} alt={title} className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h5>{title}</h5>
        <p className="fw-bold">${price}</p>
        <Button text="Agregar al carrito" variant="success" />
      </div>
    </div>
  );
};

export default ProductCard;

