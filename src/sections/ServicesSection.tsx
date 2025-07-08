import {
  ArtGalleryIcon,
  BlutekLogo,
  CodeIcon,
  GearIcon,
  LightBulbIcon,
  RobotIcon,
} from "../assets/svg";
import { SVGIcon } from "../components/SVGIcon";

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
    <section>
      <h2 className="text-4xl text-neutral-950 mb-8">
        Nuestros <span className="font-semibold">Servicios</span>
      </h2>
      <span className="text-lg text-center max-w-2xl mx-auto">
        Soluciones digitales completas, desde el concepto hasta la
        implementación final.
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-start border border-neutral-300 rounded-md p-4"
          >
            <div className="bg-neutral-200 p-4 rounded-md">
              <SVGIcon src={service.icon} size={40} color="black" />
            </div>
            <h3 className="text-xl font-medium text-neutral-950 my-2">
              {service.title}
            </h3>
            <p className="text-neutral-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
