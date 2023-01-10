import { Container } from "../components";
import Image from "next/image";
import Link from "next/link";
import { NavRoutes } from "../data";
import { motion } from "framer-motion";

export const Sidebar = ({
  open = true,
  handleClose = () => {
    return;
  },
}) => (
  <motion.aside
    variants={{
      hidden: { x: "120%", display: "hidden" },
      show: { x: 0, display: "block" },
    }}
    initial="hidden"
    animate={open ? "show" : "hidden"}
    transition={{ ease: "easeOut" }}
    open={open}
    className="fixed top-0 right-0 w-screen h-full bg-white text-black dark:bg-slate-800 dark:text-white z-50"
  >
    <Container>
      <ul className="items-center flex flex-col gap-5 justify-center min-h-screen">
        {NavRoutes.map((item, idx) => (
          <li
            onClick={() => {
              handleClose();
            }}
            className="text-lg transition-all duration-200 ease-out hover:pl-5"
            key={idx}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <button
        onClick={handleClose}
        className="absolute top-5 right-5 invert dark:invert-0 p-5"
      >
        <Image
          src="/icons/menu-close.svg"
          width={20}
          height={20}
          alt="menu-open.svg"
        />
      </button>
    </Container>
  </motion.aside>
);
