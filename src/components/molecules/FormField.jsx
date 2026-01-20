// src/components/molecules/FormField.jsx
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const FormField = ({ label, type="text", placeholder }) => {
  return (
    <div className="mb-3">
      <Label text={label} />
      <Input type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormField;

