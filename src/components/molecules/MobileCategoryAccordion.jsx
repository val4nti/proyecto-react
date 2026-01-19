// src/components/molecules/MobileCategoryAccordion.jsx
const MobileCategoryAccordion = () => {
  const categories = ["Acción", "Aventura", "Estrategia"];

  return (
    <div className="accordion accordion-flush" id="mobileMenuAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#collapseCats"
          >
            Categorías
          </button>
        </h2>
        <div id="collapseCats" className="accordion-collapse collapse" data-bs-parent="#mobileMenuAccordion">
          <ul className="list-group">
            {categories.map((cat, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {cat}
                <span className="badge bg-primary rounded-pill">14</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileCategoryAccordion;