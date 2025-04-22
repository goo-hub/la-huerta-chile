"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [alert, setAlert] = useState({ message: "", type: "" });

    useEffect(() => {
        if (alert.message) {
            const timer = setTimeout(() => {
                setAlert({ message: "", type: "" });
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
        setErrors({ ...errors, [name]: "" });
        setSuccessMessage("");
    };

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

        const templateParams = {
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            message: formData.message,
        };

        emailjs.send(
            "service_6nue1ak",
            "template_512vuln",
            templateParams,
            "7N5wU9YQn41teEjyT"
        ).then((response) => {
            setSuccessMessage("Tu mensaje fue enviado correctamente.");
            setAlert({ message: "Mensaje enviado correctamente 🎉", type: "success" });
            setFormData({
                name: "",
                lastName: "",
                email: "",
                message: "",
                termsAccepted: false,
            });
        }).catch((err) => {
            console.error("FAILED...", err);
            setAlert({ message: "⚠️ Algo anda mal. Inténtalo de nuevo.", type: "error" });
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white w-full px-5 md:px-8 pt-12 2xl:pt-20 pb-24 lg:pb-8 relative rounded-none lg:rounded-[40px] shadow-lg mx-auto"
        >
            {/* Alert Notification */}
            <AnimatePresence>
                {alert.message && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`fixed top-32 right-[40%] transform -translate-x-1/2 px-6 py-3 rounded-xl shadow-lg z-[999999] text-white font-semibold ${alert.type === "success" ? "bg-green-600" : "bg-red-500"
                            }`}
                    >
                        {alert.message}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Icon */}
            <a
                href="https://wa.link/k2cwjg"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="hidden lg:block text-white bg-primary hover:bg-accent hover:text-primary transition-colors duration-1000 ease-in-out absolute text-5xl -top-10 left-[38%] border-8 border-white rounded-full p-2 box-content" />
            </a>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Nombre */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Nombre *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-full focus:outline-none transition ${errors.name ? "border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Apellido */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Apellido *</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-full focus:outline-none transition ${errors.lastName ? "border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Correo Electrónico *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-full focus:outline-none transition ${errors.email ? "border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Mensaje */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Mensaje *</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-2xl focus:outline-none transition ${errors.message ? "border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                {/* Checkbox Términos */}
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

                {/* Mensaje éxito */}
                {successMessage && (
                    <p className="text-center font-semibold text-green-600">{successMessage}</p>
                )}

                {/* Botón */}
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