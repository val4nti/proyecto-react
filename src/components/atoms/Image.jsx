const Image = ({ src, alt, size = 45 }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: size, height: size, borderRadius: '50%' }}
    />
  );
};

export default Image;
