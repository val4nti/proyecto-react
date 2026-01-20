import ProductCard from "../molecules/ProductCard";

const ProductsSection = () => {
  const products = [
    { id: 1, title: "Teclado Gamer", price: "25.000", image: "https://via.placeholder.com/300" },
    { id: 2, title: "Mouse Gamer", price: "15.000", image: "https://via.placeholder.com/300" },
    { id: 3, title: "Audífonos Gamer", price: "35.000", image: "https://via.placeholder.com/300" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">Productos destacados</h2>
      <div className="row g-4">
        {products.map(p => (
          <div key={p.id} className="col-md-4">
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
