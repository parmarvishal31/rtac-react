import React from "react";
import { motion } from "framer-motion";
import Photo from "../assets/AboutPhoto.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="lg:mx-40 md:mx-10">
      <div className="mt-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          <span className="text-2xl border-b-2 font-serif border-yellow-300 lg:text-3xl font-semibold text-center ">
            About RTAC Education
          </span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto md:w-3/4 lg:w-full"
          >
            <p className="text-lg   text-justify  font-josefin mb-4">
              We are a leading provider of franchise opportunities, specializing
              in computer training and education services. Our mission is to
              empower individuals with the knowledge and skills needed to thrive
              in today's digital world.
            </p>
            <p className="text-lg   text-justify  font-josefin mb-4">
              At RTAC Education, we understand the importance of quality
              education and ongoing support. That's why we offer comprehensive
              franchise packages designed to help our partners succeed. Whether
              you're an experienced business owner or a budding entrepreneur,
              our franchise opportunities provide a solid foundation for growth
              and prosperity.
            </p>
            <p className="text-lg   text-justify  font-josefin mb-4">
              Our commitment to excellence extends beyond our franchise partners
              to the students we serve. We believe in providing cutting-edge
              training programs that equip individuals with the practical skills
              and knowledge needed to excel in today's competitive job market.
            </p>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={Photo}
            alt="Photo"
            className="w-[30rem] h-[24rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
