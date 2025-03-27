import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLeaf, FaSeedling, FaWater, FaTractor, FaSun, FaTree, } from "react-icons/fa";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const arrowDown = require('../assets/arrow_down.png')
const riego = require("../assets/riego.png");
const agrotextil = require("../assets/agrotextil.png");
const herramientas = require("../assets/herramientas.png");
const jardineria = require("../assets/jardineria.png");
const piscina = require("../assets/piscina.png");
const electricidad = require("../assets/electricidad.png");
const heroBg = require('../assets/hero_bg.mp4')
const heroImg = require('../assets/hero-bg.png')

const Hero = () => {

    const icons = [riego, agrotextil, piscina, jardineria, electricidad, herramientas];
    const heroRef = useRef(null);
    const btnsRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });
        document.querySelector('video').playbackRate = 0.5;
        tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1 })
            .fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
            .fromTo(".hero-icons", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2 }, "-=0.3")
            .fromTo(".hero-btn", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, "-=0.3");

        gsap.fromTo(
            btnsRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section id="hero" ref={heroRef} className="relative w-full z-0 h-screen flex items-center justify-center ">
            {/* Video de fondo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={heroBg}
                autoPlay
                muted
                poster={heroImg}
            />
            <div className="w-full h-screen absolute bg-black/50">
            </div>

            {/* Contenido principal */}
            <div className="container mx-auto px-5 2xl:px-0 relative h-auto lg:h-full z-10 flex flex-col gap-8 md:gap-0 md:flex-row items-center text-white">
                {/* Columna izquierda */}
                <div className="hero-title w-full lg:w-8/12 2xl:w-7/12 h-full flex flex-col justify-center items-center md:items-stretch text-center md:text-left gap-2 md:gap-8">
                    <h1 className="font-Season text-4xl -mt-24 md:text-6xl font-bold">
                        Soluciones en riego<br />agrícola y agrotextiles
                    </h1>

                    {/* Íconos */}
                    <div className="hero-icons flex gap-4 mt-4 text-4xl justify-center md:justify-start">
                        <FaLeaf />
                        <FaSeedling />
                        <FaWater />
                        <FaTractor />
                        <FaSun />
                        <FaTree />
                    </div>
                    <div className="w-auto absolute -left-16 bottom-40 2xl:bottom-60 hidden lg:flex items-center justify-start gap-2 rotate-[270deg]">
                        <img src={arrowDown} alt="arrow down" />
                        <span className="text-sm font-light">Scroll down</span>
                    </div>
                </div>

                {/* Columna derecha con botón alineado abajo */}
                <div className="w-full lg:w-4/12 2xl:w-5/12 h-auto md:h-full pb-0 md:pb-48 flex flex-col justify-center md:justify-end items-center md:items-start ">
                    <Link to={'https://web.whatsapp.com/send?phone=56966189492&text=Hola%20La%20Huerta%20Chile!%0D%0AJunto%20con%20saludar%2C%20solicito%20mayor%20informaci%C3%B3n'} target="_blank">
                        <button
                            type="submit"
                            className="hero-btn flex justify-center gap-4 items-center shadow-xl text-lg font-Inter font-semibold text-black bg-white backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 pl-6 pr-2 py-2 overflow-hidden border-2 rounded-full group"
                        >
                            Directo a nuestro ejecutivo
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
                    </Link>
                </div>
            </div>


            {/* Botones flotantes */}
            <div className="absolute bottom-20 hidden lg:flex gap-4 font-Inter z-40">
                {["Riego agrícola", "Agrotextil", "Piscina", "Jardinería", "Electricidad", "Herramientas"].map(
                    (text, index) => (
                        <button
                            key={index}
                            ref={(el) => (btnsRef.current[index] = el)}
                            className="group px-3 py-2 flex items-center gap-2 font-light text-sm text-white bg-neutral-300/50 hover:bg-white hover:text-black transition-colors duration-300 rounded-full"
                        >
                            <img src={icons[index]} alt={text} width={35} height={35} className="group-hover:brightness-0" />
                            {text}
                        </button>
                    )
                )}
            </div>
        </section>
    );
};

export default Hero;
