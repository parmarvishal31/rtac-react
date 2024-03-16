import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/RTAC_Logo_Without _Border.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { MdRectangle } from "react-icons/md";

function ContactUs() {
  const cards = ["Computer Courses", "Hardware", "Networking", "Web-Design"];
  const links = ["Home", "About us", "Courses", "Contact us"];
  const contacts = ["Lorem ipsum dolor ", "test@gmail.com", "9876543210"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 m-2">
      <div className="p-4 flex justify-center items-center flex-col gap-2">
        {/* Animate the image */}
        <div>
          <img className="w-48 h-48" src={Logo} alt="Logo" />
        </div>
        <div>
          <div className="flex gap-2 mt-2">
            {/* Wrap each icon with a motion.div for hover animation */}
            <motion.div
              whileHover={{ scale: 1.1 }} // Scale up on hover
              className="rounded-full bg-green-500 p-2 shadow-lg cursor-pointer"
            >
              <IoLogoWhatsapp className="text-white text-2xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }} // Scale up on hover
              className="rounded-full bg-blue-500 p-2 shadow-lg cursor-pointer"
            >
              <FaFacebook className="text-white text-2xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }} // Scale up on hover
              className="rounded-full bg-blue-900 p-2 shadow-lg cursor-pointer"
            >
              <FaLinkedin className="text-white text-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="p-4 flex  sm:items-center flex-col gap-2">
        <div>
          <span className="font-bold border-yellow-300 border-b-4">
            OUR COURSES
          </span>
        </div>
        <div>
          {cards.map((item) => {
            return (
              <div
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
          <span className="font-bold border-yellow-300 border-b-4">
            QUICK LINKS
          </span>
        </div>
        <div>
          {links.map((item) => {
            return (
              <div
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
          <span className="font-bold border-yellow-300 border-b-4">
            Contact us
          </span>
        </div>
        <div>
          {contacts.map((item) => {
            return (
              <div
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
    </div>
  );
}

export default ContactUs;
