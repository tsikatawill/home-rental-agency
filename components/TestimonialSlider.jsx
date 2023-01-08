import Image from "next/image";
import { motion } from "framer-motion";
import { slideX } from "../animations";
import { useState } from "react";

export const TestimonialSlider = ({
  testimonies = [
    {
      text: "Some testimony",
      user: "Johnny Doe",
      image: "https://loremflickr.com/100/100/user",
      job: "Writer",
    },
    {
      text: "Some testimony",
      user: "Fiifi Doe",
      image: "https://loremflickr.com/100/100/user",
      job: "Writer",
    },
  ],
}) => {
  const [selected, setSelected] = useState(testimonies[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      {testimonies.map((item, idx) => {
        return idx === selectedIndex ? (
          <motion.div
            variants={{
              initial: { x: -100, opacity: 0 },
              animate: { opacity: 1, x: 0 },
            }}
            initial="initial"
            whileInView="animate"
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="relative pl-5 min-h-[330px]"
            key={idx}
          >
            <Image
              className="absolute left-0 -top-7"
              src="/icons/quotes.svg"
              width={60}
              height={60}
              alt="quotes.svg"
            />
            <p className="leading-[36px]">{item.text}</p>

            <div className="flex gap-5 items-center mt-7">
              <div className="border-2 border-orange-500 w-[60] h-[60] rounded-full overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={item.image}
                  width={60}
                  height={60}
                />
              </div>

              <div>
                <p className="text-orange-500 font-bold text-lg">{item.user}</p>
                <p className="font-medium">{item.job}</p>
              </div>
            </div>
          </motion.div>
        ) : null;
      })}

      <div className="flex gap-3 md:mt-20 pl-5">
        {testimonies.map((item, idx) => (
          <div
            className={`p-2 my-2 h-1 w-1 cursor-pointer ${
              item.user === selected.user ? "bg-orange-500" : "bg-slate-300"
            }  rounded-full`}
            key={idx}
            onClick={() => {
              setSelectedIndex(idx);
              setSelected(testimonies[idx]);
            }}
          >
            <span className="hidden">{item.user}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
