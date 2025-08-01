import { motion } from "framer-motion";
import type { LandingSectionIds } from "../types";

type Props = {
  title: string[];
  children?: React.ReactNode;
  id?: LandingSectionIds; // TODO: Add type for id sections
};

export const Section = ({ children, title, id }: Props) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center py-25 px-3 md:px-[10%] lg:px-[20%] even:bg-neutral-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-flex gap-2 text-center text-3xl md:text-4xl text-neutral-950 mb-8"
      >
        {title.map((str, index) => (
          <span className="even:font-semibold even:text-blue-900" key={index}>
            {str}
          </span>
        ))}
      </motion.h2>
      {children}
    </section>
  );
};
