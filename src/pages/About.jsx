import React from "react";
import { motion } from "framer-motion";
import Photo from "../assets/AboutPhoto.png";

function About() {
  return (
    <div className="lg:mx-40 md:mx-10">
      <div className="mt-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          <span className="text-xl sm:text-2xl border-b-2 border-yellow-300 font-serif font-semibold">
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
            <p className="text-lg leading-relaxed text-justify">
              At <span className="font-bold underline">RTAC Education</span>, we
              provide quality education to children of all ages. Our mission is
              to create a fun and engaging learning environment that inspires
              students to reach their full potential. We believe in the power of
              education and strive to empower every student with the skills and
              knowledge they need to succeed. We offer a wide range of
              educational services, from individual tutoring sessions to group
              classes.
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
      <div className="flex justify-center mt-3">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative text-white bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 px-10 py-2 rounded-md font-bold"
        >
          Know More
        </motion.button>
      </div>
    </div>
  );
}

export default About;
