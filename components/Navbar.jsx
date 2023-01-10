import { AnimatedToggle, Container, Logo, Sidebar } from "../components";

import Image from "next/image";
import { NavRoutes } from "../data";
import { motion } from "framer-motion";
import { slideY } from "../animations";
import { useState } from "react";
import { useTheme } from "../hooks";

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const { colorTheme, setTheme } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="top-0 z-20 transition-all duration-200 ease-in">
        <Container>
          <motion.div
            variants={slideY()}
            initial="initial"
            animate="animate"
            className="inner grid grid-cols-4 pt-5 sm:pt-0 text-white sm:border-b border-white items-center w-full"
          >
            <Logo />

            <ul className="hidden sm:flex justify-between col-start-2 col-end-4">
              {NavRoutes.map((item, idx) => (
                <NavItem
                  text={item.name}
                  active={item.name === activeNav}
                  handleClick={() => setActiveNav(item.name)}
                  key={idx}
                />
              ))}
            </ul>

            <div className="justify-self-end flex items-center gap-5 col-start-4">
              <button
                className=""
                onClick={() =>
                  setTheme(colorTheme === "light" ? "light" : "dark")
                }
              >
                {colorTheme === "dark" && (
                  <AnimatedToggle>
                    <Image
                      width={20}
                      height={20}
                      src="/icons/moon.svg"
                      alt="theme-toggle-btn.svg"
                    />
                  </AnimatedToggle>
                )}
                {colorTheme === "light" && (
                  <AnimatedToggle>
                    <Image
                      width={20}
                      height={20}
                      src="/icons/sun.svg"
                      alt="theme-toggle-btn.svg"
                    />
                  </AnimatedToggle>
                )}
              </button>

              <button
                onClick={() => setShowSidebar(true)}
                className="block sm:hidden"
              >
                <Image
                  src="/icons/menu-open.svg"
                  width={20}
                  height={20}
                  alt="menu-open.svg"
                />
              </button>
            </div>
          </motion.div>
        </Container>
      </nav>
      <Sidebar open={showSidebar} handleClose={() => setShowSidebar(false)} />
    </>
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
