import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import MapEmbed from "../molecules/MapEmbed";

const ContactSection = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4>Formulario de contacto</h4>
              <FormField label="Nombre" placeholder="Ingrese su nombre" />
              <FormField label="Correo" type="email" placeholder="Ingrese su correo" />
              <FormField label="Mensaje" placeholder="Escriba su mensaje" />
              <Button text="Enviar" variant="primary" />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <MapEmbed />
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
