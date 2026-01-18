// src/components/molecules/FormField.jsx
import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

export const FormField = ({ label, type, placeholder, name, value, onChange, required }) => {
  return (
    <div className="mb-3">
      {/* Usamos el átomo Label */}
      <Label text={label} required={required} />
      
      {/* Usamos el átomo Input */}
      <Input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
      />
    </div>
  );
};

export default FormField;