// src/components/templates/HomeTemplate.jsx
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const HomeTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container my-5">{children}</main>
      <Footer />
    </>
  );
};

export default HomeTemplate;

