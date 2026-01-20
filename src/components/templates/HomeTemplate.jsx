// src/components/templates/HomeTemplate.jsx
import Navbar from "../organisms/Navbar";
import ProductsSection from "../organisms/ProductsSection";
import ContactSection from "../organisms/ContactSection";
import Footer from "../organisms/Footer";

const HomeTemplate = () => {
  return (
    <>
      <Navbar />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomeTemplate;
