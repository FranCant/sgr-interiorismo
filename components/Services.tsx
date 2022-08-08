import { FaTools } from "react-icons/fa";
import { TbTools } from "react-icons/tb";
import { AiFillFormatPainter } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { SVGProps } from "react";

// interface Icons {
//   id: string
//   header: string
//   body: string
//   icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
// }
const service = [
  {
    id: "1",
    header: "PROYECTO Y REFORMAS INTEGRALES",
    body: "Creamos proyectos y reformas integrales en Alicante, trabajamos con viviendas, residencias, empresas, tiendas, locales comerciales también realizamos reformas de baños, viviendas, residencias, comercios, tiendas, chalet. Trabajamos con los mejores profesionales y empresas constructoras de Alicante.",
    icon: (
      <FaTools className="group-hover:text-gray-100 h-20 w-20 text-gray-300 transition-all ease-in-out duration-200" />
    ),
  },
  {
    id: "2",
    header: "INTERIORISMO Y DECORACION",
    body: "Nuestro equipo te aportará infinitas soluciones de diseño, distribución y decoración. Te ayudaremos con los muebles, los textiles y la iluminación. Nos encargaremos de la selección de muebles, recepción, montaje e instalación. ¡Déjalo en nuestras manos y prepárate para disfrutar!",
    icon: (
      <AiFillFormatPainter className="group-hover:text-gray-100 h-20 w-20 text-gray-300 transition-all ease-in-out duration-200" />
    ),
  },
  {
    id: "3",
    header: "EJECUCION Y DIRECCION DE OBRA",
    body: "Realizamos proyectos integrales, desde el inicio hasta el final de cada proyecto. Nosotros nos ocuparemos de todo, revisando cada detalle y sobre todo terminando en los plazos acordados.",
    icon: (
      <TbTools className="group-hover:text-gray-100 h-20 w-20 text-gray-300 transition-all ease-in-out duration-200" />
    ),
  },
  {
    id: "4",
    header: "REFORMAS DE COCINAS",
    body: "Estamos especializados en diseño de muebles de cocina a medida y reformas de cocinas , el corazón del hogar se merece todo el protagonismo. La cocina es un espacio de nuestra casa en donde mas tiempo pasamos, muchos clientes ya han confiado en nosotros para renovar su espacio.",
    icon: (
      <BsFillHouseFill className="group-hover:text-gray-100 h-20 w-20 text-gray-300 transition-all ease-in-out duration-200" />
    ),
  },
];
export const Services = () => {
  
  return (
    <>
      <section className="bg-gray-800 w-full text-gray-100">
        <div className="layout flex flex-col p-6">
          <h2 className="py-4 text-3xl font-bold text-center">
            Nuestros Servicios
          </h2>
          <div className="divide-y divide-gray-700">
            {service.map(({ id, header, body, icon }) => (
              <div data-aos="fade-up" data-aos-delay="50" key={id} className="group grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  {icon}
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  {/* <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                    {id}
                  </span> */}
                  <span className="text-xl font-bold md:text-2xl">
                    {header}
                  </span>
                  <span className="mt-4 text-base md:text-xl text-gray-300">{body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
