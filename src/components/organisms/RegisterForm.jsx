// src/components/organisms/RegisterForm.jsx
import { useState } from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    password: '',
    rol: '',
    fechaNacimiento: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuardar = () => {
    const { nombre, correo, password, rol, fechaNacimiento } = formData;
    // Validación de nombre
    if (!nombre.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }

    // Validación de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Ingresa un correo válido.");
      return;
    }

    //Validación de contraseña
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Validación de rol
    if (!rol) {
      alert("Debes seleccionar un rol.");
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
              label="Nombre"
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

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
              label="Contraseña"
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-6">
            <FormField
              label="Rol"
              type="select"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              required
              options={[
                { value: '', label: 'Seleccione un rol' },
                { value: 'admin', label: 'Administrador' },
                { value: 'vendedor', label: 'Vendedor' },
                { value: 'cliente', label: 'Cliente' },
              ]}
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