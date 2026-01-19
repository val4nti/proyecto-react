import Link from '../atoms/Link';

const NavMenu = () => {
  const items = [
    { text: "Home", active: true },
    { text: "Categorías" },
    { text: "Ofertas" },
    { text: "Nosotros" },
    { text: "Blog" },
    { text: "Contacto" }
  ];

  return (
    <div className="d-flex gap-4">
      {items.map((item, index) => (
        <Link
          key={index}
          text={item.text}
          active={item.active || false}
        />
      ))}
    </div>
  );
};

export default NavMenu;

