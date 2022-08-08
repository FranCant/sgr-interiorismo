import Image from "next/image";

const marcas = [
  { src: "/images/inclass.png", alt: "inclass" },
  { src: "/images/ondarreta.jpeg", alt: "ondarreta" },
  { src: "/images/papeldeco.png", alt: "papeldeco" },
  { src: "/images/roca.png", alt: "roca" },
  { src: "/images/sancal.png", alt: "sancal" },
  { src: "/images/treku.png", alt: "treku" },
];

function Marcas() {
  return (
    <div className="w-full bg-white">
      <div data-aos="fade-up" data-aos-delay="50" className="layout py-20 mx-auto flex flex-col space-y-4 items-center justify-center text-main">
        <h3 className="uppercase mx-auto text-sm sm:text-2xl">Marcas que confian en nosotros</h3>
        <hr className="border border-main/30 layout" />
        <div data-aos="fade-up" data-aos-delay="100" className="pt-4 grid grid-cols-3 justify-items-center space-y-4 md:grid-cols-6 w-full mx-auto">
          {marcas.map(({ src, alt }) => (
            <div key={alt} className="relative object-contain w-full flex items-center justify-center ">
              <img className="w-28 md:w-32" src={src} alt={alt}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marcas;
