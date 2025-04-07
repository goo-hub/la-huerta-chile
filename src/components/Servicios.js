import React from "react";
import Accordion from "./Accordion";

const Servicios = () => {
  return (
    <section id="servicios" className="relative h-auto bg-white flex flex-col justify-center items-center py-24 2xl:py-48">
      <div className="pattern"></div>
      <div className="container mx-auto px-5 2xl:px-0 flex flex-col lg:flex-row items-start justify-center gap-8 mb-12 lg:mb-24">
        <div className="w-full lg:w-6/12 pr-24">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-Season font-light">
            Soluciones innovadoras que impulsan
            y protegen tu cultivo</h2>
        </div>
        <div className="w-full lg:w-6/12 px-0 2xl:px-12">
          <p>Optimizamos cada gota y protegemos cada cosecha. Ofrecemos insumos de riego agrícola y agrotextiles de alto rendimiento, garantizando eficiencia, durabilidad y resultados superiores. ¡Lleva tu producción al siguiente nivel con nosotros!</p>
        </div>
      </div>
      
      <Accordion />
    </section>
  );
};

export default Servicios;
