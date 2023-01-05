import { motion } from "framer-motion";
import { scaleUp } from "../animations";

export const AnimatedToggle = ({ children }) => {
  return (
    <motion.div variants={scaleUp} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};
