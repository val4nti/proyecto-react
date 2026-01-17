// src/components/organisms/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {/* Aquí puedes poner la URL de tu logo real */}
          <img src="https://via.placeholder.com/40" alt="Logo" className="d-inline-block align-text-top" />
        </a>
        
        <div className="collapse navbar-collapse justify-content-center">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>

        <div className="d-flex">
          <button className="btn btn-outline-primary ms-2">Iniciar Sesión</button>
          <button className="btn btn-primary ms-2">Crear Cuenta</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;