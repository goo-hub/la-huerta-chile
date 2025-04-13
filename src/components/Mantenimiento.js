import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Mantenimiento = () => {
    return (
        <>
            <section id="hero" className="relative w-full px-5 2xl:px-0 z-0 h-screen flex flex-col items-center justify-center lg:justify-between space-y-8 lg:space-y-0 py-24">
                <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-black/50 to-black/0 z-0"></div>

                <Link to="https://lahuertachile.cl" className="z-20">
                    <img src={logo} alt="La Huerta Chile" className="w-40 sm:w-48 md:w-56 lg:w-72 h-auto" />
                </Link>

                <h2 className="hidden lg:block text-4xl lg:text-6xl 2xl:text-8xl leading-snug font-Inter font-bold text-white z-10">NUESTRO NUEVO <br />
                    &nbsp; &nbsp; SITIO WEB<br />
                    &nbsp; &nbsp; &nbsp; &nbsp;ESTÁ EN CAMINO
                </h2>

                <h2 className="block lg:hidden text-4xl text-center lg:text-6xl 2xl:text-8xl leading-snug font-Inter font-bold text-white z-10">NUESTRO NUEVO <br />
                    SITIO WEB<br />
                    ESTÁ EN CAMINO
                </h2>

                <div className="container mx-auto mt-12 flex justify-center items-center flex-col space-y-8 z-20">
                    <form className="w-full">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                            <div className="relative bg-white rounded-full w-full lg:w-96 overflow-hidden">
                                <input
                                    type="text"
                                    className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-[#1D252C] text-sm rounded-lg focus:ring-primary placeholder-opacity-60 focus:border-accent block w-full p-2.5"
                                    placeholder="Ingresa tu dirección de correo electrónico"
                                />
                            </div>
                            <button
                                className="bg-[#1D252C] text-sm text-neutral-50 py-2.5 px-12 rounded-full hover:bg-primary"
                            >
                                Subscríbete
                            </button>
                        </div>
                    </form>
                    <p className="w-full lg:w-2/6 text-center text-md text-white">
                        ¡Suscríbete para ser el primero en enterarte de todos los eventos y obtener un descuento en tu primer pedido!
                    </p>
                </div>

                {/* Bolas decorativas */}
                <div className="hidden lg:block">
                    <Bolas w={32} x={15} y={25} />
                    <Bolas w={70} x={66} y={34} />
                    <Bolas w={30} x={18} y={56} />
                    <Bolas w={20} x={27} y={80} />
                    <Bolas w={24} x={70} y={85} />
                </div>
            </section>
        </>
    );
}

export default Mantenimiento;

export const Bolas = ({ w, x, y }) => {
    return (
        <div
            className="absolute rounded-full bg-primary z-20"
            style={{
                width: `${w}px`,
                height: `${w}px`,
                top: `${y}%`,
                left: `${x}%`,
            }}
        />
    );
};

