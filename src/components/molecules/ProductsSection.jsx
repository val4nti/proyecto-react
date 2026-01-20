import ProductCard from "../molecules/ProductCard";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Teclado Gamer RGB",
      price: "29.990",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Mouse Gamer",
      price: "19.990",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Audífonos Pro",
      price: "39.990",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="mb-4">Productos destacados</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
