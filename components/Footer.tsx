import Link from "next/link";

function Footer() {
  // Links nav
  const links = [
    { href: "/", label: "Home" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ];
  return (
    <div className="w-full">
      <footer className="py-5 layout flex flex-col-reverse md:space-y-0 md:flex-row items-center justify-between">
        <div className="flex items-end justify-center mt-2 md:mt-0">
          <p className="text-xs md:text-sm">
            Copyright 2022 SGR INTERIORISMO. All Rights Reserved
          </p>
        </div>{" "}
        <nav className="flex items-center">
          <ul className="flex items-center justify-center space-x-5 text-sm text-main font-light">
            {links.map(({ href, label }) => (
              <li key={label} className="font-light text-relax cursor-pointer">
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
