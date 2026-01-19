// src/components/organisms/AboutSection.jsx
import TeamMemberCard from "../molecules/TeamMemberCard";

const AboutSection = () => {
  const team = [
    {
      name: "Pedro",
      role: "Programador",
      description: "Estudiante de informática Duoc UC 🎮 Me gusta programar.",
      image: "/assets/img/pedro.png",
      github: "https://github.com/pedrohacker20",
      linkedin: "https://www.linkedin.com/feed/"
    },
    // Aquí puedes agregar a los otros integrantes que estaban en tu HTML
  ];

  return (
    <div className="card shadow-sm p-4">
      <div className="row">
        <div className="col-12 mb-4">
          <h1 className="display-5 fw-bold">Sobre Nosotros</h1>
          <p className="lead">
            Somos un grupo de estudiantes de <strong>Duoc UC</strong> apasionados por la tecnología y los videojuegos.
          </p>
          <hr />
        </div>
      </div>
      
      <div className="row mt-4">
        {team.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;