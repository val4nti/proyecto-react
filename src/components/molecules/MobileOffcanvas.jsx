// src/components/molecules/MobileOffcanvas.jsx
import MobileUserCard from "./MobileUserCard";
import MobileCategoryAccordion from "./MobileCategoryAccordion";
import UserActions from "./UserActions";

const MobileOffcanvas = () => {
  return (
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMobileMenu">
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title">Menú de Usuario</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        <MobileUserCard 
          name="Nombre Usuario" 
          email="correo@ejemplo.com" 
          avatar="https://avatars.githubusercontent.com/u/138630362"
        />
        <div className="my-3 border-bottom pb-3">
            <UserActions />
        </div>
        <MobileCategoryAccordion />
      </div>
    </div>
  );
};

export default MobileOffcanvas;