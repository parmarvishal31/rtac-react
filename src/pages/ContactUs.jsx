import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/RTAC_Logo_Without _Border.png";
import IsoLogo from "../assets/isologo.png";
import LogoTwo from "../assets/ukaslogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLongArrowAltRight,
  FaTwitter,
} from "react-icons/fa";
import { MdRectangle } from "react-icons/md";

function ContactUs({
  scrollToSection,
  contactRef,
  coursesRef,
  aboutRef,
  homeRef,
  membershipRef,
}) {
  const cards = ["Computer Courses", "Hardware", "Networking", "Web-Design"];

  const links = [
    { title: "Home", ref: homeRef },
    { title: "About us", ref: aboutRef },
    { title: "Courses", ref: coursesRef },
    { title: "Contact us", ref: contactRef },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 m-2 font-poppins">
      <div className="p-4 flex justify-center items-center flex-col gap-2">
        <div>
          <img className="w-52 h-52" src={Logo} alt="Logo" />
        </div>
        <div>
          <div className="flex gap-2 mt-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-red-500 p-2 shadow-lg cursor-pointer"
            >
              <FaInstagram className="text-white text-2xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-blue-500 p-2 shadow-lg cursor-pointer"
            >
              <FaFacebook className="text-white text-2xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-blue-900 p-2 shadow-lg cursor-pointer"
            >
              <FaLinkedin className="text-white text-2xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-sky-500 p-2 shadow-lg cursor-pointer"
            >
              <FaTwitter className="text-white text-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="p-4 flex  sm:items-center flex-col gap-2">
        <div>
          <span className="font-bold font-serif border-yellow-300 border-b-4">
            OUR COURSES
          </span>
        </div>
        <div>
          {cards.map((item) => {
            return (
              <div
                onClick={() => scrollToSection(coursesRef)}
                key={item}
                className="cursor-pointer flex gap-2 items-center"
              >
                <span className="text-sm text-customYellow">
                  <MdRectangle />
                </span>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4 flex  sm:items-center flex-col gap-2">
        <div>
          <span className="font-bold font-serif border-yellow-300 border-b-4">
            QUICK LINKS
          </span>
        </div>
        <div>
          {links.map((link) => (
            <div
              key={link.title}
              className="cursor-pointer flex gap-2 items-center"
              onClick={() => scrollToSection(link.ref)}
            >
              <span className="text-sm text-customYellow">
                <MdRectangle />
              </span>
              <span>{link.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 flex  sm:items-center flex-col gap-2">
        <div>
          <span className="font-bold uppercase font-serif border-yellow-300 border-b-4">
            Accreditations
          </span>
        </div>
        <div className="flex flex-wrap">
          <div>
            <img
              className="w-16 h-16 sm:w-24 sm:h-20"
              src={IsoLogo}
              alt="IsoLogo"
            />
          </div>
          <div>
            <img
              className="w-16 h-16 sm:w-24 sm:h-20"
              src={LogoTwo}
              alt="IsoLogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
