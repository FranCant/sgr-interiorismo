import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

function Header() {
  const { route } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const genericHamburgerLine = `h-0.5 w-6 my-0.5 transition ease-in-out transform duration-500`;

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  // Links nav
  const links = [
    { href: "/", label: "Home" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ];
  return (
    <>
      <header
        className={`${
          lastScrollY > 20 && !isOpen ? "bg-white border-b" : "bg-transparent"
        } w-screen fixed z-30 transition duration-500 ease-in-out ${
          !show && !isOpen
            ? "-translate-y-full ease-in-out duration-300 shadow-sm bg-transparent"
            : "translate-y-full"
        }} `}
      >
        {/* Desktop */}
        <div className="z-10 py-5 layout flex items-center justify-between">
          <Link href="/">
            <div
              onClick={() => isOpen && setIsOpen(isOpen)}
              className="relative w-14 h-14 shrink cursor-pointer"
            >
              {(lastScrollY > 20 && !isOpen) || (!isOpen && route !== "/") ? (
                <a>
                  <Image
                    src="/images/logosgr.webp"
                    layout="fill"
                    objectFit="cover"
                  />
                </a>
              ) : (
                <a>
                  <Image
                    priority={true}
                    src="/images/logosgrwhite.webp"
                    layout="fill"
                    objectFit="cover"
                  />
                </a>
              )}
            </div>
          </Link>
          <nav className="flex-2 shrink-0">
            <ul
              className={`items-center justify-end space-x-6 group hidden md:inline-flex text-white ${
                lastScrollY > 20 || route !== "/" ? "text-dark" : ""
              }`}
            >
              {links.map(({ href, label }) => (
                <li
                  key={label}
                  className={`${
                    route === href || route === href + "/[slug]"
                      ? "underline underline-offset-4"
                      : "hover:underline underline-offset-4 "
                  }  font-light text-relax cursor-pointer`}
                >
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Burger mobile animate */}
          <div
            className="md:hidden cursor-pointer shrink-0 py-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <button className="flex flex-col justify-center items-center z-50 shrink">
                <div
                  className={`${genericHamburgerLine} ${
                    lastScrollY > 20 || route !== "/" ? "bg-main" : "bg-white"
                  } ${isOpen && "rotate-45 translate-y-1 z-50 bg-white"}`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen && "opacity-0"
                  } ${
                    lastScrollY > 20 || route !== "/" ? "bg-main" : "bg-white"
                  } `}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    lastScrollY > 20 || route !== "/" ? "bg-main" : "bg-white"
                  } ${isOpen && "-rotate-45 -translate-y-2 z-50 bg-white"}`}
                />
              </button>
            ) : (
              <button className="flex flex-col justify-center items-center z-50">
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen && "rotate-45 translate-y-1 z-50 bg-white"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen && "opacity-0"
                  } ${lastScrollY > 20 ? "bg-main" : "bg-white/100"} `}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen && "-rotate-45 -translate-y-2 z-50 bg-white"
                  }`}
                />
              </button>
            )}
          </div>
        </div>
      {/* Sidebar */}
      <div
        className={`bg-main py-20 fixed top-0 left-0 z-20 w-full h-screen md:hidden ease-in-out duration-300 transition-all ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        {/* list nav */}
        <div className="layout pt-5 flex flex-col items-start justify-start ">
          <nav className="">
            <ul className="text-secondary flex flex-col items-start justify-center space-y-8 text-white text-4xl font-light uppercase">
              {links.map(({ href, label }) => (
                <li
                  key={label}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`${
                    isOpen ? "opacity-100" : "opacity-0"
                  } transition ease-in-out delay-100 duration-300 cursor-pointer
                      ${
                        route === href ||
                        (route === href + "/[slug]" && "text-light")
                      }`}
                >
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <hr className="layout mt-5 border-1 w-full border-secondary" />
          {/* RRSS */}
          <div className="py-5 flex items-center space-x-4 text-white">
            <a href="https://www.instagram.com/sgr.dsign/">
              <AiOutlineInstagram className="h-8 w-8" />
            </a>
            <a href="https://ar.pinterest.com/sgrdsign/_saved/">
              <BsPinterest className="h-8 w-8" />
            </a>
            <a href="https://es.linkedin.com/in/susana-g%C3%B3mez-ramos-b306796">
              <AiFillLinkedin className="h-8 w-8" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=34609702975">
              <AiOutlineWhatsApp className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      </header>
    </>
  );
}

export default Header;
