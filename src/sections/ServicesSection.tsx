import {
  ArtGalleryIcon,
  CodeIcon,
  GearIcon,
  LightBulbIcon,
  RobotIcon,
} from "../assets/svg";
import { Section } from "../components/Section";
import { SVGIcon } from "../components/SVGIcon";
import { Subtitle } from "../components/ui/Subtitle";

const SERVICES: { title: string; icon: string; description: string }[] = [
  {
    title: "Desarrollo Frontend",
    icon: CodeIcon,
    description:
      "Creamos interfaces de usuario atractivas y funcionales, optimizadas para una experiencia fluida en todos los dispositivos.",
  },
  {
    title: "Desarrollo Backend",
    icon: GearIcon,
    description:
      "Implementamos soluciones robustas y escalables en el servidor, garantizando un rendimiento óptimo y una integración fluida con el frontend.",
  },
  {
    title: "Diseño UI/UX",
    icon: ArtGalleryIcon,
    description:
      "Diseñamos experiencias de usuario intuitivas y visualmente impactantes, centradas en las necesidades del usuario final.",
  },
  {
    title: "Consultoría Digital",
    icon: LightBulbIcon,
    description:
      "Ofrecemos asesoramiento estratégico para optimizar tus proyectos digitales, desde la planificación hasta la ejecución.",
  },
  {
    title: "Automatización de Procesos",
    icon: RobotIcon,
    description:
      "Automatizamos procesos para mejorar tu eficiencia y reducir costos, adaptándonos a tu negocio.",
  },
];

const ServicesSection = () => {
  return (
    <Section title={["Nuestros", "Servicios"]} id="services">
      <Subtitle>
        Soluciones digitales completas, desde el concepto hasta la
        implementación final.
      </Subtitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-auto">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group flex flex-col gap-1 border border-neutral-200 bg-neutral-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="bg-slate-200 p-4 rounded-md w-fit group-hover:bg-blue-900 transition">
              <SVGIcon
                src={service.icon}
                size={40}
                className="group-hover:!bg-white !bg-blue-900 transition"
              />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 my-2 group-hover:text-blue-900">
              {service.title}
            </h3>
            <p className="text-neutral-600">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;
