//src/components/organisms/ProductsSection.jsx
import ProductCard from "../molecules/ProductCard";

const ProductsSection = () => {
  return (
    <section className="mb-5">
      <h2 className="mb-4">Productos destacados</h2>
      <div className="row">
        <ProductCard
          nombre="Elden Ring"
          imagen="https://image.api.playstation.com/vulcan/ap/rnd/202402/1410/c39d09e365851493639a04a553147a46e9df5c4a7538a74b.png"
          precioAntiguo={45990}
          precioNuevo={34990}
        />
        <ProductCard
          nombre="Resident Evil 4"
          imagen="https://image.api.playstation.com/vulcan/ap/rnd/202210/0713/S9996s987766655.png"
          precioAntiguo={39990}
          precioNuevo={19990}
        />
      </div>
    </section>
  );
};

export default ProductsSection;

