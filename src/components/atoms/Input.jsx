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
const Input = ({ type = "text", placeholder, name, value, onChange, required }) => {
  return (
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
