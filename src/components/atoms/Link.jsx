// src/components/atoms/Link.jsx
const Link = ({ text, href, active }) => {
  return (
    <a
      href={href}
      className={`nav-link ${active ? "fw-bold text-primary" : "text-dark"}`}
    >
      {text}
    </a>
  );
};

export default Link;
