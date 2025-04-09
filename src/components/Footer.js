import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#161616] z-40">
      <footer className="bg-[#161616] text-white py-24 z-40">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center md:items-stretch gap-12 px-6">
          {/* Sección izquierda */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Los mejores insumos de riego agrícola y agrotextiles del país
            </h2>
            <p className="mb-4 text-[#8C8C8C]">
              No solo optimizamos el riego, lo llevamos al siguiente nivel.
            </p>
            <Link to={'https://web.whatsapp.com/send?phone=56942698476&text=Hola%20La%20Huerta%20Chile!%0D%0AJunto%20con%20saludar%2C%20solicito%20mayor%20informaci%C3%B3n'} target="_blank" >
              <button
                type="submit"
                className="mt-4 md:mt-8 flex justify-center gap-4 items-center shadow-xl text-lg font-Inter text-black bg-accent backdrop-blur-md isolation-auto border-gray-50 
              before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white 
              hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-2 overflow-hidden border-2 rounded-full group"
              >
                Hablemos
                <svg
                  className="w-9 h-9 justify-end group-hover:rotate-90 bg-black group-hover:bg-black text-gray-50 ease-linear duration-300 rounded-full border border-white 
                group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-accent group-hover:fill-accent"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>

          {/* Sección derecha */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right space-y-6">
            {/* Menú */}
            <div className="flex flex-col gap-4">
              <a href="#hero" className="text-gray-400 hover:text-accent">
                Inicio &#10230;
              </a>
              <a href="#servicios" className="text-gray-400 hover:text-accent">
                Servicios &#10230;
              </a>
              <a href="#nosotros" className="text-gray-400 hover:text-accent">
                Nosotros &#10230;
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-accent">
                Contacto &#10230;
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-6 text-2xl">
              <Link to="https://www.facebook.com/profile.php?id=100094564267728" target="_blank">
                <FaFacebook className="text-gray-400 hover:text-accent" />
              </Link>
              <Link to="https://www.instagram.com/lahuerta_riegoagricola/" target="_blank">
                <FaInstagram className="text-gray-400 hover:text-accent" />
              </Link>
              <Link to={'https://web.whatsapp.com/send?phone=56966189492&text=Hola%20La%20Huerta%20Chile!%0D%0AJunto%20con%20saludar%2C%20solicito%20mayor%20informaci%C3%B3n'} target='_blank'>
                <FaWhatsapp className="text-gray-400 hover:text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="py-6 text-sm bg-[#161616] text-[#8C8C8C] text-center border-t border-neutral-600 z-40">
        <p>&copy; {new Date().getFullYear()} La Huerta | Soluciones en Riegos Agrícolas</p>
      </div>
    </div>
  );
};

export default Footer;
