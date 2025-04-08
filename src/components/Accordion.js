import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const accordion1 = require('../assets/accordion-1.png');
const accordion2 = require('../assets/accordion-2.png');
const accordion3 = require('../assets/accordion-3.png');
const accordion4 = require('../assets/accordion-4.png');
const accordion5 = require('../assets/accordion-5.png');
const accordion6 = require('../assets/accordion-6.png');
const accordionIcon1 = require('../assets/accordion-i-1.png');
const accordionIcon2 = require('../assets/accordion-i-2.png');
const accordionIcon3 = require('../assets/accordion-i-3.png');
const accordionIcon4 = require('../assets/accordion-i-4.png');
const accordionIcon5 = require('../assets/accordion-i-5.png');
const accordionIcon6 = require('../assets/accordion-i-6.png');

const services = [
    { title1: "Insumos", title2: "de riego agrícola", bgImg: accordion1, icon: accordionIcon1, content: "Optimizamos el riego con precisión milimétrica. Cada insumo que ofrecemos está diseñado para maximizar la eficiencia hídrica y mejorar el rendimiento de tus cultivos." },
    { title1: "Insumos", title2: "de agrotextiles", bgImg: accordion2, icon: accordionIcon2, content: "Optimizamos el riego con precisión milimétrica. Cada insumo que ofrecemos está diseñado para proteger y potenciar tus cultivos ante cualquier condición climática." },
    { title1: "Insumos", title2: "de piscinería", bgImg: accordion3, icon: accordionIcon3, content: "Optimizamos el cuidado de tu piscina con precisión total. Cada producto y servicio está diseñado para mantener el agua limpia y lista para que la disfrutes al máximo." },
    { title1: "Insumos", title2: "ee jardinería", bgImg: accordion4, icon: accordionIcon4, content: "Optimizamos el cuidado de tus espacios verdes con precisión natural. Cada producto está pensado para mantener tus plantas exuberantes y tus jardines siempre hermosos." },
    { title1: "Insumos", title2: "eléctricos", bgImg: accordion5, icon: accordionIcon5, content: "Optimizamos tus sistemas eléctricos con precisión y seguridad. Cada instalación y mantenimiento está diseñado para brindar eficiencia, confiabilidad y tranquilidad total." },
    { title1: "Insumos", title2: "de herramientas", bgImg: accordion6, icon: accordionIcon6, content: "Optimizamos tus labores del campo con precisión y resistencia. Cada herramienta está diseñada para aumentar tu productividad y facilitar el trabajo agrícola día a día." },
];

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(() => {
        const storedIndex = sessionStorage.getItem('selectedServiceIndex');
        return storedIndex ? parseInt(storedIndex) : 0;
    });

    useEffect(() => {
        const handleServiceSelected = (event) => {
            const index = event.detail;
            setActiveIndex(index);
            sessionStorage.setItem('selectedServiceIndex', index);
        };

        window.addEventListener('serviceSelected', handleServiceSelected);

        return () => {
            window.removeEventListener('serviceSelected', handleServiceSelected);
            sessionStorage.removeItem('selectedServiceIndex');
        };
    }, []);

    return (
        <div className="w-full px-5 2xl:px-0">
            {/* Versión Desktop (horizontal) */}
            <div className="hidden lg:flex gap-4 items-center justify-between container mx-auto h-[700px] bg-gray-100 p-12 xl:p-16 2xl:p-24 rounded-[60px]">
                {services.map((service, index) => (
                    <motion.div
                        key={`desktop-${index}`}
                        className={`relative overflow-hidden flex flex-col cursor-pointer rounded-2xl shadow-lg transition-all duration-300 ${activeIndex === index
                            ? "w-[500px] h-full p-6 border-none items-start justify-around"
                            : "w-[200px] bg-white border border-gray-200 hover:bg-accent h-full px-4 py-[40px] items-center justify-between"
                            }`}
                        onClick={() => setActiveIndex(index)}
                        animate={{ width: activeIndex === index ? '30%' : '16%' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            backgroundImage: activeIndex === index ? `url(${service.bgImg})` : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <img src={service.icon} alt={service.title2} className={`max-h-16 2xl:max-h-20 object-contain ${activeIndex === index ? "invert" : "invert-0"}`} />

                        <div className={`flex flex-col ${activeIndex === index ? "w-full rotate-0" : "w-60 rotate-[-90deg] -translate-y-16"}`}>
                            <motion.h2 className={`text-left font-bold transition-transform ${activeIndex === index ? "w-full text-3xl 2xl:text-4xl text-white" : "text-3xl text-black"
                                }`}>
                                {service.title1}
                            </motion.h2>
                            <motion.h2 className={`text-left font-bold transition-transform ${activeIndex === index ? "w-full text-3xl 2xl:text-4xl text-white" : "text-3xl text-black"
                                }`}>
                                {service.title2}
                            </motion.h2>
                        </div>

                        {activeIndex === index && (
                            <>
                                <motion.p
                                    className="mt-4 text-white text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {service.content}
                                </motion.p>
                                <button
                                    type="submit"
                                    className="flex justify-center gap-2 items-center shadow-xl text-sm font-Inter font-semibold text-black bg-white backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 pl-6 pr-2 py-2 overflow-hidden border-2 rounded-full group"
                                >
                                    Más info
                                    <svg
                                        className="w-9 h-9 justify-end group-hover:rotate-90 bg-black border-primary group-hover:bg-black text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            className="fill-primary group-hover:fill-primary"
                                        ></path>
                                    </svg>
                                </button>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Versión Mobile (vertical) */}
            <div className="lg:hidden container mx-auto bg-gray-100 p-6 rounded-[30px]">
                {services.map((service, index) => (
                    <motion.div
                        key={`mobile-${index}`}
                        className={`relative overflow-hidden flex flex-col cursor-pointer rounded-2xl shadow-lg transition-all duration-300 mb-4 ${activeIndex === index
                            ? "h-auto py-12 px-6 border-none items-start justify-around"
                            : "h-24 bg-white border border-gray-200 hover:bg-accent px-4 py-4 items-center justify-center"
                            }`}
                        onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                        style={{
                            backgroundImage: activeIndex === index ? `url(${service.bgImg})` : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex items-center w-full">
                            <img src={service.icon} alt={service.title2} className={`h-12 mr-4 ${activeIndex === index ? "invert" : "invert-0"}`} />

                            <div className="flex-1">
                                <h2 className={`font-bold ${activeIndex === index ? "text-white text-3xl" : "text-black"}`}>
                                    {service.title1} {service.title2}
                                </h2>
                            </div>
                        </div>

                        {activeIndex === index && (
                            <>
                                <motion.p
                                    className="mt-4 text-white text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {service.content}
                                </motion.p>
                                <button
                                    type="submit"
                                    className="mt-4 flex justify-center gap-2 items-center shadow-xl text-sm font-Inter font-semibold text-black bg-white backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 pl-6 pr-2 py-2 overflow-hidden border-2 rounded-full group"
                                >
                                    Más info
                                    <svg
                                        className="w-9 h-9 justify-end group-hover:rotate-90 bg-black border-primary group-hover:bg-black text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            className="fill-primary group-hover:fill-primary"
                                        ></path>
                                    </svg>
                                </button>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
