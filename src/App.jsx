// src/App.jsx
import HomeTemplate from './components/templates/HomeTemplate.jsx';
import ProductCard from './components/molecules/ProductCard.jsx';
import RegisterForm from './components/organisms/RegisterForm.jsx';
import './style.css';
//import index.css from './index.css';
// Asegúrate de importar el CSS para que se vea como gamer
//import './style.css'; 

function App() {
  return (
    <HomeTemplate>
      {/* 1. SECCIÓN DE REGREISTRO: Aquí probamos tu lógica de la pauta */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>

      <hr className="my-5" />
      

      {/* 2. SECCIÓN DE PRODUCTOS: Usando tu molécula ProductCard */}
      <section className="pb-5">
        <div className="container">
          <h2 className="mb-4 text-dark fw-bold">Ofertas Destacadas</h2>
          <div className="row">
            <ProductCard 
              nombre="Elden Ring - Shadow of the Erdtree"
              imagen="https://image.api.playstation.com/vulcan/ap/rnd/202402/1410/c39d09e365851493639a04a553147a46e9df5c4a7538a74b.png"
              precioAntiguo={45990}
              precioNuevo={34990}
              link="#"
            />
            <ProductCard 
              nombre="Resident Evil 4 Remake"
              imagen="https://image.api.playstation.com/vulcan/ap/rnd/202210/0713/S9996s987766655.png"
              precioAntiguo={39990}
              precioNuevo={19990}
              link="#"
            />
            <ProductCard 
              nombre="The Last of Us Part II"
              imagen="https://image.api.playstation.com/vulcan/img/rnd/202010/2618/it6887555.png"
              precioAntiguo={29990}
              precioNuevo={14990}
              link="#"
            />
             <ProductCard 
              nombre="Spider-Man 2"
              imagen="https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b7549.png"
              precioAntiguo={59990}
              precioNuevo={44990}
              link="#"
            />
          </div>
        </div>
      </section>
    </HomeTemplate>
  );
}

export default App;