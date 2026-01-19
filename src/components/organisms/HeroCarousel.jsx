// src/components/organisms/HeroCarousel.jsx
const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      {/* Versión Web (d-none d-md-block) */}
      <div id="carouselWeb" className="carousel slide d-none d-md-block" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/1200x300" className="d-block w-100" alt="Slider" />
          </div>
        </div>
      </div>
      {/* Versión Móvil (d-md-none) */}
      <div id="carouselMobile" className="carousel slide d-md-none" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/900x500" className="d-block w-100" alt="Slider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;