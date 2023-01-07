import { AnimatedToggle, Container, Logo } from "../components";
import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideY } from "../animations";
import { useTheme } from "../hooks";

export const Navbar = () => {
  const [transparentClasses, setTransparentClasses] = useState("");
  const [activeNav, setActiveNav] = useState("Home");
  const { colorTheme, setTheme } = useTheme();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setTransparentClasses("bg-[rgba(0,0,0,.5)]");
  //       console.log("hey");
  //     } else {
  //       setTransparentClasses("");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const NavItems = ["Home", "Landlord", "Tenants", "Contact us"];
  return (
    <nav
      className={`top-0 z-20 ${transparentClasses} transition-all duration-200 ease-in`}
    >
      <Container>
        <motion.div
          variants={slideY()}
          initial="initial"
          animate="animate"
          className="inner grid grid-cols-4 pt-5 sm:pt-0 text-white sm:border-b border-white items-center w-full"
        >
          <Logo />

          <ul className="hidden sm:flex justify-between col-start-2 col-end-4">
            {NavItems.map((item, idx) => (
              <NavItem
                text={item}
                active={item === activeNav}
                handleClick={() => setActiveNav(item)}
                key={idx}
              />
            ))}
          </ul>

          <button
            className="justify-self-end col-start-4"
            onClick={() => setTheme(colorTheme === "light" ? "light" : "dark")}
          >
            {colorTheme === "dark" && (
              <AnimatedToggle>
                <Image
                  width={20}
                  height={20}
                  src="/icons/sun.svg"
                  alt="theme-toggle-btn.svg"
                />
              </AnimatedToggle>
            )}
            {colorTheme === "light" && (
              <AnimatedToggle>
                <Image
                  width={20}
                  height={20}
                  src="/icons/moon.svg"
                  alt="theme-toggle-btn.svg"
                />
              </AnimatedToggle>
            )}
          </button>
        </motion.div>
      </Container>
    </nav>
  );
};

const NavItem = ({ text, active, handleClick }) => (
  <li
    onClick={handleClick}
    className={`p-5 border-b-2 text-lg cursor-pointer transition-all duration-150 ease-in ${
      active ? "border-b-white" : "border-b-transparent"
    }`}
  >
    {text}
  </li>
);
