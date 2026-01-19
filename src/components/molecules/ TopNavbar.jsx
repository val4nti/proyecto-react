// src/components/molecules/TopNavbar.jsx
import Brand from "./Brand";
import SearchBar from "./SearchBar";
import UserActions from "./UserActions";
import Button from "../atoms/Button";

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        {/* Logo */}
        <Brand />

        {/* Buscador centrado */}
        <div className="collapse navbar-collapse justify-content-center">
          <SearchBar />
        </div>

        {/* Acciones usuario + botón mobile */}
        <div className="d-flex">
          <UserActions />

          <button
            className="btn btn-primary d-lg-none ms-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMobileMenu"
            aria-controls="offcanvasMobileMenu"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default TopNavbar;
