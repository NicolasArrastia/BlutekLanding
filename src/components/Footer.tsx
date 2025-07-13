import { BlutekLogo } from "../assets/svg";
import { SVGIcon } from "./SVGIcon";

const FOOTER_SECTIONS: { title: string; info: string[] }[] = [
  {
    title: "Servicios",
    info: [
      "Desarrollo Web",
      "UX/UI Design",
      "Consultoría Digital",
      "Automatizaciones",
    ],
  },
  {
    title: "Tecnologías",
    info: ["React & Next.js", "Tailwind CSS", "TypeScript & Node.js", "Strapi"],
  },
  {
    title: "Contacto",
    info: [
      "nicolasarrastia@gmail.com",
      "Buenos Aires, Argentina",
      "Disponibilidad Global",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center py-8 pb-12">
      <div className="flex gap-1 font-semibold justify-center items-center text-2xl">
        <SVGIcon src={BlutekLogo} />
        Blutek
      </div>

      <span className="text-neutral-400">
        Desarrollamos experiencias web que marcan la diferencia.
      </span>
      <span className="text-neutral-400">Desde Argentina para el mundo</span>

      <div className="h-px bg-neutral-700 w-20 my-6" />

      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-2xl flex-wrap">
        {FOOTER_SECTIONS.map((section, index) => (
          <div key={index} className="flex flex-col items-center my-4">
            <h3 className="text-lg font-bold mb-2">{section.title}</h3>
            <ul className="text-neutral-400 text-center">
              {section.info.map((item, idx) => (
                <li key={idx} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="h-px bg-neutral-800 w-[80%] my-6" />

      <span className="text-neutral-500">
        © {new Date().getFullYear()} Blutek. Todos los derechos reservados.
      </span>
    </footer>
  );
};

export default Footer;
