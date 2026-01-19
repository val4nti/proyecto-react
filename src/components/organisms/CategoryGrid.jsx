// src/components/organisms/CategoryGrid.jsx
const CategoryGrid = () => {
  const categories = [
    { title: "Acción", text: "Juegos llenos de adrenalina.", img: "https://via.placeholder.com/400x200" },
    { title: "Aventura", text: "Explora mundos fascinantes.", img: "https://via.placeholder.com/400x200" },
    { title: "Estrategia", text: "Desafía tu mente.", img: "https://via.placeholder.com/400x200" }
  ];

  return (
    <section id="categorias" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Categorías</h2>
        <div className="row">
          {categories.map((cat, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card">
                <img src={cat.img} className="card-img-top" alt={cat.title} />
                <div className="card-body">
                  <h5 className="card-title">{cat.title}</h5>
                  <p className="card-text">{cat.text}</p>
                  <a href="/categorias.html" className="btn btn-primary">Explorar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;