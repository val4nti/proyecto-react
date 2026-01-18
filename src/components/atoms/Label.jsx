import React from 'react';

export const Label = ({ text, required = false }) => {
  return (
    <label className="form-label fw-bold">
      {text} {required && <span className="text-danger">*</span>}
    </label>
  );
};

export default Label;