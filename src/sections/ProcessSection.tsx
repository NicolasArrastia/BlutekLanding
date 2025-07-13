import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Subtitle } from "../components/ui/Subtitle";

type StepType = {
  title: string;
  description: string;
};

const PROCESSES_STEPS: StepType[] = [
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

const Step = ({ index, step }: { index: number; step: StepType }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="relative z-10 mb-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          className="bg-blue-900 flex size-14 rounded-full items-center justify-center text-white text-xl font-bold shadow-lg"
        >
          {(index + 1).toString().padStart(2, "0")}
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 w-full"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <Section id="process" title={["Nuestro", "Proceso"]}>
      <Subtitle>
        Un enfoque estructurado que garantiza resultados excepcionales en cada
        proyecto.
      </Subtitle>
      <div className="container mx-auto px-4 mt-8">
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 hidden md:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-full bg-blue-900"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {PROCESSES_STEPS.map((step, index) => (
              <Step index={index} step={step} key={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        ></motion.div>
      </div>
    </Section>
  );
};

export default ProcessSection;
