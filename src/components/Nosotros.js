import { Link } from 'react-router-dom';
const imgNosotros = require('../assets/nosotros-img.png')

const Nosotros = () => {
    return (
        <div id='nosotros' className='bg-white px-5 2xl:px-0'>
            <div className="container mx-auto mih-h-[50vh] bg-white flex flex-col lg:flex-row space-x-8 space-y-8 justify-center items-center pt-24 pb-24 2xl:pb-48">
                <div className="w-full lg:w-3/6 flex justify-center items-center">
                    <img src={imgNosotros} alt="fotografía agrotextiles" className="" />
                </div>
                <div className="w-full lg:w-3/6 flex flex-col space-y-8">
                    <span>Nuestra empresa</span>
                    <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-Season font-light">Cultivamos soluciones<br /> para el campo</h2>
                    <div className='space-y-2'>
                        <p>
                            <strong>La Huerta</strong> es una empresa familiar fundada en 2019 en El Manzano, comuna de Las Cabras, por un grupo de <strong>jóvenes comprometidos</strong> con el desarrollo agrícola.
                        </p>
                        <p>
                            Nos dedicamos a la distribución de insumos para riego tecnificado y agrotextiles, ayudando a agricultores de zonas como San Pedro de Melipilla, Pichidegua y alrededores a enfrentar la escasez hídrica con soluciones eficientes y de calidad.
                        </p>
                    </div>
                    <Link to={'https://web.whatsapp.com/send?phone=56934116351&text=Hola%20La%20Huerta%20Chile!%0D%0AJunto%20con%20saludar%2C%20solicito%20mayor%20informaci%C3%B3n'} target="_blank" >
                        <button
                            type="submit"
                            className="flex justify-center gap-4 items-center shadow-xl text-lg font-Inter text-black bg-primary backdrop-blur-md isolation-auto border-gray-50 
              before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black 
              hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-2 overflow-hidden border-2 rounded-full group"
                        >
                            Directo a nuestro ejecutivo
                            <svg
                                className="w-9 h-9 justify-end group-hover:rotate-90 bg-white group-hover:bg-white text-primary ease-linear duration-300 rounded-full border border-white 
                group-hover:border-none p-2 rotate-45"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    className="fill-primary group-hover:fill-primary"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Nosotros;