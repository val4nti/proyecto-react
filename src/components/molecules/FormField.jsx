// src/components/molecules/FormField.jsx
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const FormField = ({ label, type, placeholder, name, value, onChange, required }) => {
  return (
    <div className="mb-3">
      <Label text={label} required={required} />
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
