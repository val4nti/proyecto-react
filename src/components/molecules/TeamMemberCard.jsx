// src/components/molecules/TeamMemberCard.jsx
import Image from "../atoms/Image";

const TeamMemberCard = ({ name, role, description, image, github, linkedin }) => {
  return (
    <div className="col-lg-4 text-center">
      <Image src={image} alt={name} size={140} />
      <h2 className="fw-normal mt-3">{name}</h2>
      <small><strong>{role}</strong></small>
      <p>{description}</p>
      <div className="d-flex justify-content-center gap-2">
        <a href={github} className="btn btn-dark btn-sm"><i className="bi bi-github"></i></a>
        <a href={linkedin} className="btn btn-dark btn-sm"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  );
};

export default TeamMemberCard;