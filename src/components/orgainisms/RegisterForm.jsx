import React, { useState } from 'react';

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

        // 1. VALIDACIÓN DE EDAD (Mínimo 18 años)
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

        // 2. LÓGICA DE DESCUENTO DUOC
        if (correo.toLowerCase().endsWith('@duocuc.cl')) {
            alert("¡Validado! Se ha aplicado un 20% de descuento a tu cuenta por ser alumno Duoc.");
        } else {
            alert("Usuario registrado con éxito.");
        }
    };

    return (
        <div className="card-body">
            <h4 className="card-title">Registro de nuevo usuario</h4>
            <div className="row">
                <div className="mb-3 col-6">
                    <label className="form-label">Correo electrónico</label>
                    <input 
                        type="email" 
                        name="correo" 
                        className="form-control" 
                        onChange={handleChange} 
                        placeholder="ejemplo@duocuc.cl"
                    />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Fecha de nacimiento</label>
                    <input 
                        type="date" 
                        name="fechaNacimiento" 
                        className="form-control" 
                        onChange={handleChange} 
                    />
                </div>
            </div>
            <div className="text-end">
                <button type="button" className="btn btn-primary" onClick={handleGuardar}>
                    Guardar
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;