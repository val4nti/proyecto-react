// src/components/organisms/RegisterForm.jsx
import { useState } from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    correo: '',
    fechaNacimiento: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuardar = () => {
    const { correo, fechaNacimiento } = formData;

    // Validación de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Ingresa un correo válido.");
      return;
    }

    // Fecha obligatoria
    if (!fechaNacimiento) {
      alert("Debes ingresar tu fecha de nacimiento.");
      return;
    }

    // Validación de edad
    const hoy = new Date();
    const cumple = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const m = hoy.getMonth() - cumple.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
      edad--;
    }

    if (edad < 18) {
      alert("Debes ser mayor de 18 años.");
      return;
    }

    // Descuento Duoc
    if (correo.toLowerCase().endsWith('@duocuc.cl')) {
      alert("Usuario DUOC: 20% de descuento de por vida 🎉");
    } else {
      alert("Usuario registrado correctamente.");
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="card-title mb-4">Registro de nuevo usuario</h4>

        <div className="row">
          <div className="col-6">
            <FormField
              label="Correo electrónico"
              type="email"
              name="correo"
              placeholder="ejemplo@duocuc.cl"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-6">
            <FormField
              label="Fecha de nacimiento"
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="text-end mt-3">
          <Button
            text="Guardar Registro"
            variant="primary"
            onClick={handleGuardar}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;