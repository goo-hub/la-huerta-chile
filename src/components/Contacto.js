import React from "react";
import ContactForm from "./Form";

const Contacto = () => {
  return (
    <div className="relative w-full">
      <section id="contacto" className="h-[50vh] lg:h-[110vh] 2xl:h-screen 2k:h-[70vh] bg-blue-200 flex justify-center items-center">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.8147067249142!2d-71.39676659999999!3d-34.1766548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96639788e48356fb%3A0x7275de0f4fd35719!2sLa%20Huerta%20Riego%20Agr%C3%ADcola!5e0!3m2!1ses!2sco!4v1742779276299!5m2!1ses!2sco" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <div className="form w-full lg:w-auto relative lg:absolute right-0 lg:right-12 2xl:right-40 bottom-0 lg:bottom-8 2xl:bottom-[10vh]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacto;
