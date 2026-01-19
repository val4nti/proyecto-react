//src/molecules/carItemRow.jsx
import CartItemInfo from "./CartItemInfo";
import QuantityControl from "./QuantityControl";

const CartItemRow = ({ item, onDecrease, onIncrease }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 p-3 border rounded">
      <CartItemInfo
        image={item.image}
        name={item.name}
        price={item.price}
      />

      <QuantityControl
        quantity={item.quantity}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />
    </div>
  );
};

export default CartItemRow;
