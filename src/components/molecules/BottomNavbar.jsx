// src/components/molecules/BottomNavbar.jsx
import NavMenu from "./NavMenu";
import CartButton from "./CartButton";
import CategoryDropdown from "./CategoryDropdown";

const BottomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-none d-lg-block">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                <strong>Home</strong>
              </a>
            </li>

            <CategoryDropdown />

            <li className="nav-item">
              <a className="nav-link" href="/ofertas.html">Ofertas</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/nosotros.html">Nosotros</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/blog.html">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contacto.html">Contacto</a>
            </li>

            <li className="nav-item ms-5">
              <CartButton />
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
