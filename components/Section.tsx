import Image from "next/image";
import React from "react";

function Section() {
  return (
    <div className="w-full bg-backgroundSec min-h-full">
     <div className="layout py-20 flex flex-col space-y-5 items-start text-main">
        <h3 data-aos="fade-up" data-aos-delay="0" className="uppercase mx-auto">Estamos dispuestos a revolucionar tu mundo</h3>

        <hr data-aos="fade-up" data-aos-delay="50" className="border border-main/30 layout" />
     <p data-aos="fade-up" data-aos-delay="50">
        Somos una empresa de interiorismo y reformas integrales en Alicante,
        realizamos proyectos completos, desde la medición, elección de los
        materiales y acabados más adecuados, infografías y si lo deseas podemos
        realizar el seguimiento de obra.
      </p>
      <p data-aos="fade-up" data-aos-delay="100">
        En SGR INTERIORISMO somos expertos en proyectos de interiorismo para
        residencias, pisos, hoteles, tiendas, locales comerciales, también
        realizamos reformas de cocinas y baños, analizamos el proyecto para
        ofrecerte las mejores propuestas por nuestro equipo de profesionales.
      </p>
      {/* <div className="relative object-cover layout-fill overflow-hidden w-full">
        <img className="w-full" src="/images/exterior.webp" />
      </div> */}
      <div data-aos="fade-up" data-aos-delay="150" className="relative">
        <Image layout="intrinsic" width={3840}
        height={2160} src='/images/exterior.webp' alt="exterior casa" />
      </div>
     </div>
    </div>
  );
}

export default Section;
