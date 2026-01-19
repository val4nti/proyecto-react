// src/components/organisms/RegisterForm.jsx
import React, { useState } from 'react';
import FormField from '../molecules/FormField'; 
import Button from '../atoms/Button';       

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        correo: '',
        fechaNacimiento: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGuardar = () => {
        const { correo, fechaNacimiento } = formData;

        // 1. VALIDACIÓN DE FORMATO DE CORREO (Debe estar al principio)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert("Por favor, ingresa un correo electrónico válido (debe incluir @ y un dominio).");
            return;
        }

        // 2. VALIDACIÓN DE FECHA VACÍA
        if (!fechaNacimiento) {
            alert("Por favor, ingresa tu fecha de nacimiento.");
            return;
        }

        // 3. LÓGICA DE EDAD (Mínimo 18 años)
        const hoy = new Date();
        const cumple = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - cumple.getFullYear();
        const m = hoy.getMonth() - cumple.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
            edad--;
        }

        if (edad < 18) {
            alert("Debes ser mayor de 18 años para registrarte.");
            return;
        }

        // 4. LÓGICA DE DESCUENTO DUOC
        if (correo.toLowerCase().endsWith('@duocuc.cl')) {
            alert("¡Validado! Se ha aplicado un 20% de descuento por ser alumno Duoc.");
        } else {
            alert("Usuario registrado con éxito.");
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
                            required={true}
                        />
                    </div>
                    <div className="col-6">
                        <FormField 
                            label="Fecha de nacimiento"
                            type="date"
                            name="fechaNacimiento"
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                            required={true}
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