import { Container, CostCard, SectionHeader } from "../components";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleUp } from "../animations";

export const CostShowcase = () => {
  const CostItems = [
    {
      icon: "/icons/dollar.svg",
      text: "Pay as Little as possible!",
    },
    {
      icon: "/icons/community.svg",
      text: "Enjoy wisdom of community!",
    },
    {
      icon: "/icons/stack.svg",
      text: "Let some else handle Landlord!",
    },
    {
      icon: "/icons/plant.svg",
      text: "Enjoy peaceful Environment!",
    },
    {
      icon: "/icons/shield.svg",
      text: "Stay Safe! Save Money!",
    },
    {
      icon: "/icons/eye.svg",
      text: "Pay for what you use!",
    },
  ];
  return (
    <section className="py-10 sm:py-20 const dark:bg-slate-900 dark:text-white">
      <Container>
        <SectionHeader text={"minimum living cost takes care of everything"} />

        <div className="flex flex-col sm:flex-row mt-10 gap-10 items-center md:items-start">
          <div
            className="image-wrapper flex-shrink-0 rounded-tl-[50px] rounded-br-[50px] overflow-hidden h-[521px] w-[387px] bg-slate-100"
            style={{ boxShadow: "5px 24px 53px rgba(0, 0, 0, 0.25)" }}
          >
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5, ease: [0.2, 0.05, 0.5, 0.99] }}
            >
              <Image
                src="/images/cost-showcase.jpg"
                width={387}
                height={521}
                alt="cost-showcase.jpg"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          <motion.div
            variants={scaleUp}
            initial="initial"
            whileInView="animate"
            transition={{
              staggerChildren: 0.05,
              //   when: "afterChildren",
            }}
            // viewport={{ once: true }}
            className="flex flex-wrap justify-center sm:justify-start sm:content-start gap-10"
          >
            {CostItems.map((item, idx) => (
              <CostCard key={idx} {...item} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
