//src/molecules/CartItemInfo.jsx
import Image from "../atoms/Image";

const CartItemInfo = ({ image, name, price }) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <Image src={image} alt={name} size={50} />
      <div>
        <h6 className="mb-0">{name}</h6>
        <small className="text-muted">${price.toLocaleString()}</small>
      </div>
    </div>
  );
};

export default CartItemInfo;
