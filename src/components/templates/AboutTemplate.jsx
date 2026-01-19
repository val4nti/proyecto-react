//src/components/templates/AboutTemplate.jsx

import Navbar from "../organisms/Navbar";

const AboutTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AboutTemplate;
