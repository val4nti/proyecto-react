// src/components/aroms/Label.jsx
const Label = ({ text, required }) => {
  return (
    <label className="form-label fw-bold">
      {text}
      {required && <span className="text-danger ms-1">*</span>}
    </label>
  );
};

export default Label;
