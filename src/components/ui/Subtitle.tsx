import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
};

export const Subtitle = ({ children }: Props) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-lg text-neutral-600 text-center max-w-3xl mx-auto"
    >
      {children}
    </motion.span>
  );
};
