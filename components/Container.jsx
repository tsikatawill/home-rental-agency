import { motion } from "framer-motion";

export const Container = ({ children, extraClasses, ...rest }) => {
  return (
    <motion.div
      {...rest}
      className={`max-w-[1200px] px-5 md:px-10 m-auto ${extraClasses}`}
    >
      {children}
    </motion.div>
  );
};
