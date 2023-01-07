import { click } from "../animations";
import { motion } from "framer-motion";

export const Button = ({ children, rounded }) => {
  return (
    <motion.button
      variants={click}
      initial="initial"
      whileTap="animate"
      className={`h-[65px] px-10 grid place-content-center font-medium text-lg bg-orange-500 text-white hover:bg-orange-600 transition-all duration-150 ease-in ${
        rounded ? "rounded-xl" : "rounded-md"
      }`}
    >
      {children}
    </motion.button>
  );
};
