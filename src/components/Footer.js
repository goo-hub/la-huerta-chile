import React from 'react';

const Footer = () => {
  return (
    <div className='h-screen'>
      <footer className="bg-[#161616] h-[90%] text-white py-48">
        <div className="container mx-auto flex">
          <div className="w-3/6 pr-12 flex flex-col gap-4 justify-start items-start">
            <h2 className="text-6xl font-bold mb-4">Los mejores insumos de riego agricola
              y agrotextiles del pais</h2>
            <p className="mb-4 text-[#8C8C8C]">No solo optimizamos el riego, lo llevamos al siguiente nivel.</p>
            <button
              type="submit"
              class="mt-8 flex justify-center gap-4 items-center shadow-xl text-lg font-Inter text-black  bg-accent backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 pl-6 pr-2 py-2 overflow-hidden border-2 rounded-full group"
            >
              Hablemos
              <svg
                class="w-9 h-9 justify-end group-hover:rotate-90 bg-black group-hover:bg-black text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  class="fill-accent group-hover:fill-accent"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-3/6 flex flex-col items-end space-y-4">
            <a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a>
            <a href="#servicios" className="text-gray-400 hover:text-white">Servicios</a>
            <a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a>
          </div>
        </div>
      </footer>
      <div className="p-6 h-[10%] bg-[#161616] text-white text-center">
        <p>&copy; {new Date().getFullYear()} La Huerta Chile. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;

