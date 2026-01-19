// src/components/molecules/TeamMemberCard.jsx
import Image from "../atoms/Image";
import Button from "../atoms/Button";

const TeamMemberCard = ({ image, name, role, description, github, linkedin }) => {
  return (
    <div className="col-lg-4 text-center">
      <img
        src={image}
        className="bd-placeholder-img rounded-circle"
        width="140"
        height="140"
        alt={name}
      />

      <h2 className="fw-normal">{name}</h2>
      <small>
        <strong>{role}</strong>
      </small>
      <p>{description}</p>

      <div className="d-flex justify-content-center">
        <a href={github} className="btn btn-dark btn-sm">
          <i className="bi bi-github"></i>
        </a>
        <a href={linkedin} className="btn btn-dark btn-sm mx-2">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;
