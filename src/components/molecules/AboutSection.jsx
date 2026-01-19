//src/components/molecules/AboutSection.jsx
const AboutSection = ({ subtitle, text }) => {
  return (
    <>
      <h4 className="mb-2 text-muted">{subtitle}</h4>
      <p className="card-text">{text}</p>
    </>
  );
};

export default AboutSection;
