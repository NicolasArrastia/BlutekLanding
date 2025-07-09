import { CheckCircleIcon, HandshakeIcon, TargetIcon } from "../assets/svg";
import { Section } from "../components/Section";
import { SVGIcon } from "../components/SVGIcon";

const SKILLS: { title: string; icon: string; description: string }[] = [
  {
    title: "Eficiencia",
    icon: CheckCircleIcon,
    description:
      "Procesos optimizados para entregas puntuales y sin complicaciones",
  },
  {
    title: "Precisión",
    icon: TargetIcon,
    description:
      "Cada detalle importa. Desarrollamos con meticulosidad y cuidado",
  },
  {
    title: "Cercanía",
    icon: HandshakeIcon,
    description: "Comunicación clara y trato humano en cada interacción",
  },
];

const AboutUsSection = () => {
  return (
    <Section title={["Sobre", "Nosotros"]} id="about-us">
      {/* <h2 className="text-4xl text-neutral-950 mb-8">
        Sobre <span className="text-center font-semibold">Nosotros</span>
      </h2> */}
      <span className="text-neutral-950 font-semibold text-2xl text-center mb-5">
        "Blutek es un equipo frontend que cumple. Diseñamos con presición y
        entregamos en tiempo y forma."
      </span>
      <div className="h-px w-20 my-5 m-auto bg-black"></div>
      <span className="text-neutral-600 text-lg text-center max-w-3xl">
        Cada proyecto es una oportunidad para demostrar que la calidad técnica y
        el diseño cuidadoso pueden coexistir en perfecta armonía.
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-4xl">
        {SKILLS.map((skill) => (
          <div key={skill.title} className="flex flex-col items-center">
            <div className="bg-black p-4 rounded-md">
              <SVGIcon src={skill.icon} size={50} color="white" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-950 my-2">
              {skill.title}
            </h3>
            <p className="text-neutral-600 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AboutUsSection;
