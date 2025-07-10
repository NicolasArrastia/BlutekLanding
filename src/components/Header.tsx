import { BlutekLogo } from "../assets/svg/index.ts";
import Button from "./Form/Button.tsx";
import { SVGIcon } from "./SVGIcon.tsx";

type LandingSections =
  | "services"
  | "process"
  | "projects"
  | "about-us"
  | "contact";

const NAVBAR: { goTo: LandingSections; label: string }[] = [
  { goTo: "about-us", label: "Nosotros" },
  { goTo: "services", label: "Servicios" },
  { goTo: "process", label: "Proceso" },
  { goTo: "projects", label: "Portfolio" },
  { goTo: "contact", label: "Contacto" },
];

const Header = () => {
  return (
    <header className="flex w-full py-4 px-5 justify-between items-center absolute top-0 left-0 z-50 bg-white shadow-md">
      <div className="flex items-center gap-2 text-neutral-950 font-semibold text-2xl">
        <SVGIcon src={BlutekLogo} color="black" size={30} />
        Blutek
      </div>
      <nav className="hidden md:flex gap-5 text-neutral-600 text-lg">
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
