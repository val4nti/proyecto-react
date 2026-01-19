// src/components/molecules/MobileUserCard.jsx
import Image from "../atoms/Image";
import Button from "../atoms/Button";

const MobileUserCard = ({ name, email, avatar }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-4 d-flex justify-content-center">
          <Image src={avatar} alt="Avatar" size={60} />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title mb-0">{name}</h5>
            <p className="card-text small text-muted">{email}</p>
            <div className="d-flex gap-2">
              <Button text="Perfil" variant="primary" />
              <Button text="Salir" variant="danger" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileUserCard;