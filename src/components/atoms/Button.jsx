// src/components/atoms/Button.jsx
const Button = ({ text, variant = "primary", icon }) => {
  return (
    <button className={`btn btn-${variant}`}>
      {icon && <i className={`bi ${icon} me-2`}></i>}
      {text}
    </button>
  );
};

export default Button;

