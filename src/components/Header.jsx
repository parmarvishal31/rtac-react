import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/RTAC_Logo_Without _Border.png";
const NavLinks = ({
  scrollToSection,
  contactRef,
  coursesRef,
  aboutRef,
  homeRef,
}) => {
  return (
    <>
      <NavLink
        to="/"
        onClick={() => scrollToSection(homeRef)}
        className={activeStyleCallback}
      >
        Home
      </NavLink>
      <NavLink
        to="/courses"
        onClick={() => scrollToSection(coursesRef)}
        className={activeStyleCallback}
      >
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
// Nav.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";

const activeClassName = "text-red-400 me-4";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : " me-4 hover:text-red-400 ";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:flex">
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
        </div>
        <div className="w-[75px]">{/* ThemeToggle */}</div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence>
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
}

function Header({
  scrollToSection,
  contactRef,
  coursesRef,
  aboutRef,
  homeRef,
}) {
  return (
    <header
      className="sticky top-0 z-[1] w-full px-4 py-2 flex flex-wrap items-center justify-between border-b bg-white font-sans font-semibold text-text-primary backdrop-blur-[100px]"
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        position: "fixed",
      }}
    >
      <NavLink
        homeRef={homeRef}
        aboutRef={aboutRef}
        coursesRef={coursesRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
        to="/"
        className="inline-block"
      >
        <img alt="Logo" src={Logo} className="block w-[65px] md:ml-10" />
      </NavLink>
      <Nav
        homeRef={homeRef}
        aboutRef={aboutRef}
        coursesRef={coursesRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />
    </header>
  );
}

export default Header;
