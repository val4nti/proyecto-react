// src/components/molecules/FormField.jsx
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const FormField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  options = [],
}) => {
  return (
    <div className="mb-3">
      <Label text={label} />

      {type === "select" ? (
        <select
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;


