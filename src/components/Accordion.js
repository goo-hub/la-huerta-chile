import { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaWater, FaTractor, FaSun, FaTools } from "react-icons/fa";

const accordion1 = require('../assets/accordion-1.png')

const services = [
    { title1: "Insumos:", title2: "Riego agrícola", bgImg: accordion1, icon: <FaLeaf />, content: "Optimizamos el riego con precisión milimétrica. Cada insumo que ofrecemos está diseñado para maximizar la eficiencia hídrica y mejorar el rendimiento de tus cultivos." },
    { title1: "Insumos:", title2: "Agrotextiles", bgImg: accordion1, icon: <FaSeedling />, content: "Protección efectiva para cultivos y suelos..." },
    { title1: "Insumos:", title2: "Piscinas", bgImg: accordion1, icon: <FaWater />, content: "Soluciones de calidad para mantenimiento de piscinas..." },
    { title1: "Insumos:", title2: "Jardinería", bgImg: accordion1, icon: <FaTractor />, content: "Todo lo necesario para el cuidado de jardines..." },
    { title1: "Insumos:", title2: "Electricidad", bgImg: accordion1, icon: <FaSun />, content: "Equipos eléctricos para instalaciones agrícolas..." },
    { title1: "Insumos:", title2: "Herramientas", bgImg: accordion1, icon: <FaTools />, content: "Herramientas especializadas para trabajo en campo..." },
];

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex gap-4 items-center justify-between container mx-auto h-[700px] bg-gray-100 p-24 rounded-[60px]">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className={`relative overflow-hidden flex flex-col items-center cursor-pointer rounded-2xl shadow-lg transition-all duration-300 ${activeIndex === index ? "w-[500px] h-full p-6 border-none justify-around" : "w-[200px] bg-white border border-gray-200 hover:bg-accent h-full px-4 py-24 items-center justify-between"}`}
                    onClick={() => setActiveIndex(index)}
                    animate={{ width: activeIndex === index ? 360 : '16%' }}
                    transition={{ duration: 0.5 }}
                    style={{
                        backgroundImage: activeIndex === index ? `url(${service.bgImg})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Ícono en la parte superior */}
                    <div className={`text-2xl mb-4 ${activeIndex === index ? "text-white" : "text-black"}`}>{service.icon}</div>

                    {/* Título rotado si está cerrado */}
                    <div className={`w-full flex flex-col ${activeIndex === index ? "rotate-0" : "rotate-[-90deg]"}`}>
                        <motion.h2
                            className={`text-left font-bold transition-transform ${activeIndex === index ? "w-full text-4xl text-white" : "w-48 text-3xl text-black"}`}
                        >
                            {service.title1}
                        </motion.h2>
                        <motion.h2
                            className={`text-left font-bold transition-transform ${activeIndex === index ? "w-full text-4xl text-white" : "w-48 text-3xl text-black"}`}
                        >
                            {service.title2}
                        </motion.h2>
                    </div>

                    {/* Contenido cuando está abierto */}
                    {activeIndex === index && (
                        <motion.p
                            className="mt-4 text-white text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {service.content}
                        </motion.p>
                    )}
                    {activeIndex === index && (
                        <button
                            type="submit"
                            class="flex justify-center gap-2 items-center shadow-xl text-sm font-Inter font-semibold text-black bg-white backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 pl-6 pr-2 py-2 overflow-hidden border-2 rounded-full group"
                        >
                            Directo a nuestro ejecutivo
                            <svg
                                class="w-9 h-9 justify-end group-hover:rotate-90 bg-black border-primary group-hover:bg-black text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    class="fill-primary group-hover:fill-primary"
                                ></path>
                            </svg>
                        </button>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
