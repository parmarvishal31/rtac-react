import React from 'react'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/RTAC_Logo_Without _Border.png'
import { FaPhoneVolume } from "react-icons/fa6";

  const activeClassName = "text-red-400 me-2";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : " me-2 hover:text-red-400 ";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className={activeStyleCallback}>
        Home
      </NavLink>

      <NavLink to="/courses" className={activeStyleCallback}>
        Courses
      </NavLink>
      <NavLink to="/about" className={activeStyleCallback}>
        About us
      </NavLink>
      <NavLink to="/contact" className={activeStyleCallback}>
        Contact us
      </NavLink>
    </>
  );
};
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      setIsOpen(false);
    }, [location.pathname]);
  
    return (
      <>
        <nav className="flex flex-[1] items-center justify-end overflow-hidden">
          <div className="hidden justify-end md:flex">
            <NavLinks />
          </div>
          <div className="w-[75px]">
            {/* <ThemeToggle /> */}
          </div>
          <div className="flex w-[75px] justify-end md:hidden">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              layout="position"
              key="nav-links"
              variants={mobileNavContainerVariant}
              initial="hidden"
              animate="show"
              className="mt-4 basis-full md:hidden"
            >
              <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
                <NavLink to="/" className={activeStyleCallback}>
                  Home
                </NavLink>
              </motion.div>
              <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
                <NavLink to="/courses" className={activeStyleCallback}>
                  Courses
                </NavLink>
              </motion.div>
              <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
                <NavLink to="/about" className={activeStyleCallback}>
                  About us
                </NavLink>
              </motion.div>
              <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
                <NavLink to="/contact" className={activeStyleCallback}>
                  Contact us
                </NavLink>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
  

function Header() {
  return (
    <header className="sticky top-0 z-[1]   flex w-full px-4 py-2 flex-wrap items-center justify-between border-b  bg-background  font-sans font-semibold  text-text-primary backdrop-blur-[100px] " style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
     <NavLink to="/" className="inline-block">
        <img
          alt="Blog Logo"
          src={Logo}
          className="block w-[65px] md:ml-10"
        />
      </NavLink>
    <Nav />
  </header>
  )
}

export default Header