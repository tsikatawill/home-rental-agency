import { motion } from "framer-motion";
import { slideX } from "../animations";

export const SectionHeader = ({ text }) => {
  return (
    <div className="w-fit">
      <motion.h2
        variants={slideX("right")}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="leading-[64px] font-extrabold text-4xl capitalize"
      >
        {text}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "40%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="h-1 w-52 bg-orange-500"
      ></motion.div>
    </div>
  );
};
