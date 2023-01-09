import Image from "next/image";
import { motion } from "framer-motion";
import { scaleUp } from "../animations";

export const CostCard = ({ icon, text }) => {
  return (
    <motion.div
      variants={scaleUp}
      className="h-fit gap-5 py-5 flex flex-col items-center md:items-start"
    >
      <div
        className="bg-white h-[77px] w-[77px] grid place-content-center rounded-[10px]"
        style={{ boxShadow: "0px 12px 19px rgba(0, 0, 0, 0.15)" }}
      >
        <Image src={icon} width={45} height={45} alt="icon.svg" />
      </div>
      <p className="font-semibold leading-[35px] text-2xl capitalize text-center md:text-left max-w-[200px] sm:max-w-full ">
        {text}
      </p>
    </motion.div>
  );
};
