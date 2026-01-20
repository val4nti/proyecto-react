// src/components/atoms/Image.jsx
const Image = ({ src, alt, size = 40 }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ objectFit: "cover" }}
    />
  );
};

export default Image;


