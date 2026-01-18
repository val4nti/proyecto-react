import React from 'react';

export const Badge = ({ text, color = "success" }) => {
  return (
    <span className={`badge bg-${color} rounded-pill`}>
      {text}
    </span>
  );
};

export default Badge;