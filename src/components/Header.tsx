import { useEffect, useState } from "react";
import { BlutekLogo } from "../assets/svg/index.ts";
import type { LandingSectionIds } from "../types.ts";
import Button from "./Form/Button.tsx";
import { SVGIcon } from "./SVGIcon.tsx";

const NAVBAR: { goTo: LandingSectionIds; label: string }[] = [
  { goTo: "about-us", label: "Nosotros" },
  { goTo: "services", label: "Servicios" },
  { goTo: "process", label: "Proceso" },
  { goTo: "projects", label: "Portfolio" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full py-4 px-5 flex justify-between md:justify-start items-center top-0 left-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="flex items-center gap-2 text-neutral-900 font-semibold text-2xl"
      >
        <SVGIcon src={BlutekLogo} className="!bg-neutral-950" size={30} />
        Blutek
      </a>
      <nav className="hidden md:flex gap-5 text-neutral-600 text-lg m-auto">
        {NAVBAR.map((item) => (
          <a key={item.goTo} href={`#${item.goTo}`}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button>Contáctanos</Button>
    </header>
  );
};

export default Header;
