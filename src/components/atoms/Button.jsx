// src/components/atoms/Button.jsx
const Button = ({ text, variant = "primary", icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} d-flex align-items-center gap-2 px-3 fw-bold`}
    >
      {icon && <i className={`bi ${icon}`}></i>}
      {text}
    </button>
  );
};

export default Button;
