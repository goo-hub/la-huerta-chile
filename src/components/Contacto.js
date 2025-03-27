import React from "react";
import ContactForm from "./Form";

const Contacto = () => {
  return (
    <div className="relative w-full z-40">
      <section id="contacto" className="relative h-[50vh] lg:h-[110vh] 2xl:h-screen 2k:h-[70vh] bg-blue-200 flex justify-center items-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11101.945619872531!2d-71.40505300528523!3d-34.181422872252405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96639788e48356fb%3A0x7275de0f4fd35719!2sLa%20Huerta%20Riego%20Agr%C3%ADcola!5e0!3m2!1ses!2sco!4v1743089018750!5m2!1ses!2sco" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="absolute h-[50vh] lg:h-[110vh] 2xl:h-screen 2k:h-[70vh] w-full left-0 top-0 bg-[#00C2F2] mix-blend-hue select-none pointer-events-none"></div>
      </section>
      <div className="form w-full lg:w-auto relative lg:absolute right-0 lg:right-12 2xl:right-40 bottom-0 lg:bottom-16 2xl:bottom-[10vh]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacto;
