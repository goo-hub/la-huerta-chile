import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center px-6 py-4 lg:py-6">

                {/* Logo */}
                <Link to={'https://lahuertachile.cl'} >
                    <img src={logo} alt="La Huerta Chile" className="w-40 sm:w-48 md:w-56 lg:w-72 h-auto" />
                </Link>

                {/* Menú Desktop */}
                <ul className="hidden md:flex font-Inter font-light space-x-6 text-white">
                    <li><a href="#hero" className="hover:text-accent transition">Inicio</a></li>
                    <li><a href="#servicios" className="hover:text-accent transition">Servicios</a></li>
                    <li><a href="#contacto" className="hover:text-accent transition">Contacto</a></li>
                </ul>

                {/* Botón Hablemos */}
                <Link to={'https://web.whatsapp.com/send?phone=56966189492&text=Hola%20La%20Huerta%20Chile!%0D%0AJunto%20con%20saludar%2C%20solicito%20mayor%20informaci%C3%B3n'} target="_blank" >
                    <button
                        type="submit"
                        className="hidden md:flex justify-center gap-4 items-center shadow-xl text-lg font-Inter text-white bg-transparent backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 pl-6 pr-2 py-2 overflow-hidden border-2 rounded-full group"
                    >
                        Hablemos
                        <svg
                            className="w-9 h-9 justify-end group-hover:rotate-90 bg-white group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                            viewBox="0 0 16 19"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                className="fill-gray-800 group-hover:fill-gray-800"
                            ></path>
                        </svg>
                    </button>
                </Link>
                {/* Botón Hamburguesa Mobile */}
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

            </div>

            {/* Menú Mobile */}
            {menuOpen && (
                <div className="md:hidden bg-black/90 text-white fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 text-xl">
                    <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-6 text-3xl">✖</button>
                    <a href="#hero" className="hover:text-accent transition">Inicio</a>
                    <a href="#servicios" className="hover:text-accent transition">Servicios</a>
                    <a href="#contacto" className="hover:text-accent transition">Contacto</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
