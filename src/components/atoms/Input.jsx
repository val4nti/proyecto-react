// src/components/atoms/Input.jsx
/*const Input = ({ placeholder }) => {
  return (
    <input
      className="form-control me-2"
      type="search"
      placeholder={placeholder}
    />
  );
};

export default Input;
*/
const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

