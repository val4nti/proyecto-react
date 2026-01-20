// src/components/atoms/Button.jsx
const Button = ({ text, variant = "primary", onClick, type="button" }) => {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;


