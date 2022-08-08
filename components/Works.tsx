import React from "react";

const Work = () => {
  const box = [
    {
      id: "1",
      header: "Programa de necesidades",
      body: "A través de una entrevista con el cliente podremos conocer sus necesidades, sus gustos y estilo de vida; creando así un proyecto único adaptado por completo.",
    },
    {
      id: "2",
      header: "Toma de datos",
      body: "Consta de la medición de la vivienda o local, un reportaje fotográfico y el estudio de las necesidades del cliente.",
    },
    {
      id: "3",
      header: "Propuesta",
      body: "Asesoramos aportando ideas, distribución de los espacios y los materiales a utilizar. Mostraremos al cliente planos de distribución, plantas y alzados con las soluciones adaptadas a sus necesidades. En esta fase realizamos los primeros bocetos, incluyendo una selección de colores y acabados. Al cliente se le presenta en la reunión el proyecto mediante infografías 3D.",
    },
    {
      id: "4",
      header: "Presupuesto",
      body: "Elaboramos el presupuesto disponible para su ejecución en función de lo acordado con el cliente en la entrevista.",
    },
  ];
  return (
    <>
      <section className="w-full py-14 bg-fill text-gray-100 z-0">

          <div className="px-4">
          <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase">
            nuestro metodo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-bgSecondary">
            Como realizamos nuestro trabajo
          </h2>
          </div>
          <div className="grid gap-6 my-10 layout md:grid-cols-2 xl:grid-cols-4">
            {box.map(({ id, header, body }) => (
              <div key={id} data-aos="fade-up" data-aos-delay="50" className="flex flex-col p-8 space-y-4 rounded-md bg-white">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-fill text-gray-100">
                  {id}
                </div>
                <h2 className="text-main">{header}</h2>
                <p className="text-base md:text-lg font-light">{body}</p>
              </div>
            ))}
          </div>

      </section>
    </>
  );
};

export default Work;
