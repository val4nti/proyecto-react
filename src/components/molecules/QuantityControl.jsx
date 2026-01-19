//src/molecules/QuantityControl.jsx
import Button from "../atoms/Button";

const QuantityControl = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <Button text="-" variant="outline-secondary" onClick={onDecrease} />
      <span className="fw-bold">{quantity}</span>
      <Button text="+" variant="outline-secondary" onClick={onIncrease} />
    </div>
  );
};

export default QuantityControl;
