// src/components/molecules/NavMenu.jsx
// src/components/molecules/NavMenu.jsx
import Link from '../atoms/Link';

const NavMenu = () => {
  const items = [
    { text: "Home", href: "/", active: true },
    { text: "Categorías", href: "/categorias" },
    { text: "Ofertas", href: "/ofertas" },
    { text: "Nosotros", href: "/nosotros" }, 
    { text: "Blog", href: "/blog" },
    { text: "Contacto", href: "/contacto" }
  ];

  return (
    <div className="d-flex gap-4">
      {items.map((item, index) => (
        <Link
          key={index}
          text={item.text}
          href={item.href} 
          active={item.active || false}
        />
      ))}
    </div>
  );
};

export default NavMenu;

