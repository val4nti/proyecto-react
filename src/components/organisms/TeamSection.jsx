// src/components/organisms/AboutSection.jsx
import TeamMemberCard from "../molecules/TeamMemberCard";

const TeamSection = () => {
  return (
    <div className="text-center mt-4">
      <div className="row">
        <TeamMemberCard
          image="/assets/img/face-programador2.png"
          name="Joseph"
          role="Programador"
          description="Estudiante de segundo año de analista en Duoc UC."
          github="https://github.com/pedrohacker20"
          linkedin="https://www.linkedin.com/feed/"
        />

        <TeamMemberCard
          image="/assets/img/Luna.png"
          name="Luna"
          role="Scrum Master"
          description="Estudiante de Ingeniería en Informática, TechLead y Junior Frontend."
          github="https://github.com/pedrohacker20"
          linkedin="https://www.linkedin.com/feed/"
        />

        <TeamMemberCard
          image="/assets/img/pedro.png"
          name="Pedro"
          role="Programador"
          description="Estudiante de informática Duoc UC 🎮 Me gusta programar."
          github="https://github.com/pedrohacker20"
          linkedin="https://www.linkedin.com/feed/"
        />
      </div>
    </div>
  );
};

export default TeamSection;

