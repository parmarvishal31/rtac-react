import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Photo from "../assets/AboutPhoto.png";
import CoverOne from "../assets/cover1.jpg";
function AboutDetails() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="lg:mx-40 md:mx-10">
      <div className="mt-10 text-center">
        <h2 className="text-xl lg:text-3xl font-bold mb-2">
          <span className="text-xl sm:text-4xl border-b-4 border-yellow-300 font-serif font-semibold">
            About RTAC Education
          </span>
        </h2>
        <div className="flex mt-4 sm:6  justify-center items-center">
          <img className="w-full mx-[24px]" src={CoverOne} alt="CoverOne" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto md:w-3/4 lg:w-full"
          >
            <p className="text-lg leading-relaxed text-justify font-josefin">
              <div>
                At <span className="font-bold underline">RTAC Education</span>,
                we provide quality education to children of all ages. Our
                mission is to create a fun and engaging learning environment
                that inspires students to reach their full potential. We believe
                in the power of education and strive to empower every student
                with the skills and knowledge they need to succeed.
              </div>
              <div className="mt-2">
                We offer a wide range of educational services, from individual
                tutoring sessions to group classes.Our experienced instructors
                are passionate about helping each student reach their goals. We
                also provide professional development workshops for teachers,
                administrators, and parents so they can better understand how to
                support their students’ learning.
              </div>
              <div className="mt-2">
                Our team is dedicated to providing high-quality service and
                ensuring our clients receives the best experience possible. We
                have been in business for over 10 years and continue to grow
                year after year. We are committed to improving our services and
                adapting to the ever-changing needs of our clients.
              </div>
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
            className="w-[38rem] h-[30rem]"
          />
        </div>
      </div>
      <div className="flex justify-center mt-3"></div>
    </div>
  );
}

export default AboutDetails;
