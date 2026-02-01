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
// src/components/atoms/Input.jsx
const Input = ({ type, name, value, onChange, placeholder, required }) => {
  return (
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;


