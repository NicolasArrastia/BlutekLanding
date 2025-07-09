import { Section } from "../components/Section";

const PROCESSES_STEPS: { title: string; description: string }[] = [
  {
    title: "Descubrimiento",
    description:
      "Entendemos tu visión, objetivos y necesidades específicas. Analizamos el proyecto desde todos los ángulos.",
  },
  {
    title: "Planificación",
    description:
      "Definimos la arquitectura, tecnologías y timeline. Creamos un roadmap claro y detallado.",
  },
  {
    title: "Desarrollo",
    description:
      "Construcción iterativa con feedback continuo. Desarrollo limpio, testeable y escalable.",
  },
  {
    title: "Entrega",
    description:
      "Deployment, documentación y soporte. Te acompañamos hasta que todo funcione perfectamente.",
  },
];

const ProcessSection = () => {
  return (
    <Section title={["Nuestro", "Proceso"]} id="process">
      <span>
        Un enfoque estructurado que garantiza resultado excepcionales en cada
        proyecto.
      </span>

      <div className="flex flex-col items-start w-full gap-8">
        {PROCESSES_STEPS.map((step, index) => (
          <div key={index}>
            <div className="bg-black flex size-14 rounded-sm items-center justify-center text-white text-2xl">
              {(index + 1).toString().padStart(2, "0")}
            </div>
            <h3 className="font-semibold text-xl">{step.title}</h3>
            <p className="text-lg text-neutral-700">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProcessSection;
