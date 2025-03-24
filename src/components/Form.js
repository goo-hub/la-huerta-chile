"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    // Manejo de cambios en los inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
        setErrors({ ...errors, [name]: "" });
    };

    // Validación y envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.lastName.trim()) newErrors.lastName = "El apellido es obligatorio";
        if (!formData.email.trim()) newErrors.email = "El correo es obligatorio";
        if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio";
        if (!formData.termsAccepted) newErrors.termsAccepted = "Debes aceptar los términos";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log("Formulario enviado:", formData);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white px-6 md:px-8 pt-20 pb-12 relative rounded-[40px] shadow-lg max-w-lg mx-auto"
        >
            {/* Icono de WhatsApp */}
            <Link to={'https://web.whatsapp.com/send?phone=56966189492&text=Hola%20La%20Huerta%20Chile!%0D%0AJunto%20con%20saludar%2C%20solicito%20mayor%20informaci%C3%B3n'} target='_blank'>
                <FaWhatsapp className="text-white bg-primary hover:bg-accent hover:text-primary transition-colors duration-1000 ease-in-out absolute text-5xl -top-10 left-[38%] border-8 border-white rounded-full p-2 box-content" />
            </Link>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Campo Nombre */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Nombre *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-full focus:outline-none transition ${errors.name ? "border-red-500" : "border-gray-300 focus:border-green-500"
                            }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Campo Apellido */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Apellido *</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-full focus:outline-none transition ${errors.lastName ? "border-red-500" : "border-gray-300 focus:border-green-500"
                            }`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>

                {/* Campo Email */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Correo Electrónico *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-full focus:outline-none transition ${errors.email ? "border-red-500" : "border-gray-300 focus:border-green-500"
                            }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Campo Mensaje */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Mensaje *</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-2xl focus:outline-none transition ${errors.message ? "border-red-500" : "border-gray-300 focus:border-green-500"
                            }`}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                {/* Checkbox de Términos y Condiciones */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="w-5 h-5 accent-primary"
                    />
                    <label className="text-gray-700 text-sm">
                        Acepto todos los <a href="#" className="text-primary font-semibold">términos y condiciones</a>.
                    </label>
                </div>
                {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

                {/* Botón Enviar */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-primary hover:bg-accent hover:text-primary text-white font-semibold py-3 rounded-full transition"
                >
                    Contactar ahora
                </motion.button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
