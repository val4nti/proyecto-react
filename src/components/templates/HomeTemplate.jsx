// src/components/templates/HomeTemplate.jsx
import Navbar from "../organisms/Navbar";

const HomeTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default HomeTemplate;
