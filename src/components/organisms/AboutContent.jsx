//src/components/organisms/AboutContent.jsx
// src/components/organisms/AboutContent.jsx
import AboutSection from "../molecules/AboutSection";

const AboutContent = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <img
              src="/assets/img/banner2.png"
              className="card-img-top"
              alt="Videojuegos Retro"
            />

            <div className="card-body">
              <h4 className="card-title text-center mb-3">
                🎮 Historia de RetroGaming Haven
              </h4>

              <AboutSection
                subtitle="Un Viaje al Pasado 🚀"
                text="RetroGaming Haven nació en el año 2010, en un pequeño local del centro de la ciudad, fundado por dos amigos apasionados por los videojuegos de su infancia..."
              />

              <AboutSection
                subtitle="Crecimiento y Comunidad 🌟"
                text="Con el tiempo, RetroGaming Haven se ganó la reputación de ser un santuario para los amantes de los videojuegos clásicos..."
              />

              <AboutSection
                subtitle="🎯 Misión"
                text="Nuestra misión es preservar y celebrar la rica historia de los videojuegos..."
              />

              <AboutSection
                subtitle="🔮 Visión"
                text="En RetroGaming Haven, soñamos con ser líderes mundiales en el mercado de videojuegos retro..."
              />

              <AboutSection
                subtitle="🚀 Innovación Continua"
                text="A lo largo de los años, hemos ampliado nuestra oferta para incluir servicios de reparación..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

