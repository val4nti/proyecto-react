// src/components/organisms/Navbar.jsx
import Brand from '../molecules/Brand';
import SearchBar from '../molecules/SearchBar';
import UserActions from '../molecules/UserActions';
import NavMenu from '../molecules/NavMenu';
import CartButton from '../molecules/CartButton';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white flex-column p-0 shadow-sm">
      
      {/* FILA SUPERIOR */}
      <div className="container-fluid py-2 border-bottom d-flex justify-content-between align-items-center">
        <Brand />
        <SearchBar />
        <UserActions />
      </div>

      {/* FILA INFERIOR */}
      <div className="w-100 bg-light py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <NavMenu />
          <CartButton />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
