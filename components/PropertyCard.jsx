import Image from "next/image";
import { motion } from "framer-motion";
import { scaleUp } from "../animations";

export const PropertyCard = ({
  id,
  image,
  title,
  type,
  price,
  beds,
  baths,
  floors,
}) => {
  return (
    <motion.div
      variants={scaleUp}
      initial="initial"
      whileInView="animate"
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      viewport={{ once: true }}
      className="bg-white border borer-[#979797] w-full rounded-3xl overflow-hidden dark:bg-slate-900 "
      style={{ boxShadow: "0px 34.0693px 36.1986px rgba(0, 0, 0, 0.133714)" }}
    >
      <div className="h-[283px] bg-slate-200">
        <Image
          src={image}
          width={354}
          height={283}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-2xl leading-[30px] mb-4">{title}</h3>

        <small className="text-lg font-normal text-[#818181]">{type}</small>

        <p className="text-orange-500 font-bold text-2xl mb-4">
          ${price}/Month
        </p>
      </div>

      <div className="grid grid-cols-3 text-lg font-bold border-t dark:text-black border-t-[#E4E4E4]">
        <div className="flex justify-center items-center dark:invert gap-1  h-16">
          <Image src="/icons/bed.svg" width={17} height={17} alt="bed.svg" />
          <span>{beds}</span>
        </div>
        <div className="flex justify-center items-center dark:invert gap-1 border-x border-x-[#E4E4E4] dark:border-black h-16">
          <Image src="/icons/bath.svg" width={17} height={17} alt="bed.svg" />
          <span>{baths}</span>
        </div>
        <div className="flex justify-center items-center dark:invert gap-1 h-16">
          <Image src="/icons/size.svg" width={17} height={17} alt="bed.svg" />
          <span>{floors}</span>
        </div>
      </div>
    </motion.div>
  );
};
