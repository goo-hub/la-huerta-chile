import React, { useState } from "react";
import ContactForm from "./Form";
import mapaFallback from "../assets/mapa.jpg";

const Contacto = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full z-40">
      <section
        id="contacto"
        className="relative h-[50vh] lg:h-[110vh] 2xl:h-screen 2k:h-[70vh] bg-blue-200 flex justify-center items-center"
      >
        {!hasError ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11101.945619872531!2d-71.40505300528523!3d-34.181422872252405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96639788e48356fb%3A0x7275de0f4fd35719!2sLa%20Huerta%20Riego%20Agr%C3%ADcola!5e0!3m2!1ses!2sco!4v1743089018750!5m2!1ses!2sco"
            width="100%"
            title="map"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onError={() => setHasError(true)}
            className="absolute top-0 left-0 w-full h-full z-0"
          />
        ) : (
          <img
            src={mapaFallback}
            alt="Mapa de ubicación"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        )}

        {/* Overlay azul con mezcla de color */}
        <div className="absolute h-full w-full left-0 top-0 bg-[#00C2F2] mix-blend-hue select-none pointer-events-none z-10" />
      </section>

      {/* Contact Form con z-50 para que esté al frente */}
      <div className="form w-full lg:w-auto relative lg:absolute right-0 lg:right-12 2xl:right-40 bottom-0 lg:bottom-16 2xl:bottom-[10vh] z-50">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacto;
