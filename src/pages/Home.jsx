//src/pages/Home.jsx
import HomeTemplate from "../components/templates/HomeTemplate";
import ProductsSection from "../components/organisms/ProductsSection";
//import SimpleFormSection from "../components/organisms/SimpleFormSection";
//import MapSection from "../components/organisms/MapSection";

const Home = () => {
  return (
    <HomeTemplate>
      <ProductsSection />
      <SimpleFormSection />
      <MapSection />
    </HomeTemplate>
  );
};

export default Home;

