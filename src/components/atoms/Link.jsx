// src/components/atoms/Link.jsx
const Link = ({ text, href = "#", active = false }) => {
  return (
    <a
      href={href}
      className={`text-decoration-none fw-bold ${
        active
          ? "text-dark border-bottom border-primary border-3"
          : "text-muted"
      }`}
    >
      {text}
    </a>
  );
};
