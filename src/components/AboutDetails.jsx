import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Photo from "../assets/AboutPhoto.png";
import CoverOne from "../assets/cover1.jpg";
import Aim from "../assets/NewAim.png";
function AboutDetails() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <>
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
                  At <span className="font-bold underline">RTAC Education</span>
                  , we provide quality education to children of all ages. Our
                  mission is to create a fun and engaging learning environment
                  that inspires students to reach their full potential. We
                  believe in the power of education and strive to empower every
                  student with the skills and knowledge they need to succeed.
                </div>
                <div className="mt-2">
                  We offer a wide range of educational services, from individual
                  tutoring sessions to group classes.Our experienced instructors
                  are passionate about helping each student reach their goals.
                  We also provide professional development workshops for
                  teachers, administrators, and parents so they can better
                  understand how to support their students’ learning.
                </div>
                <div className="mt-2">
                  Our team is dedicated to providing high-quality service and
                  ensuring our clients receives the best experience possible. We
                  have been in business for over 10 years and continue to grow
                  year after year. We are committed to improving our services
                  and adapting to the ever-changing needs of our clients.
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
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation to apply when component mounts
          transition={{ duration: 0.5 }} // Animation duration
          className="text-lg leading-relaxed text-justify font-josefin mx-6"
        >
          <p>
            If you are looking for an education provider that will ensure your
            child reaches their fullest potential, look no further than ABC
            Education! It is our firm belief that value based learning has far
            greater relevance in a dynamic and ever-changing work environment.
            RTAC Education is a team of professionals to support and care the
            associates all around. This ensures that every student of RTAC
            Education shares a very special relationship with the organization,
            which leads to effective realization of our objectives and students
            goals.
          </p>
        </motion.div>
      </div>
      {/* aim */}
      <div
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        className="mt-6 px-10 mb-5 p-5 py-5 md:py-10"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="w-96 h-40 hidden lg:block">
            <motion.img
              src={Aim}
              alt="Aim"
              className="w-full h-full"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="lg:hidden text-4xl font-semibold font-poppins border-b-4 border-yellow-300">
            Our Aim
          </div>
          <div className="text-lg leading-relaxed text-justify font-josefin mx-6">
            <p className="mb-4">
              Our aim is to provide quality educational products and services
              that enable students to achieve their learning goals and reach
              their full potential. We create a positive learning environment
              that promotes collaboration, creativity, and lifelong learning.
            </p>
            <p>
              Additionally, we have a comprehensive understanding of current
              trends in education to offer relevant advice and guidance when
              needed. We are dedicated to providing excellent customer service
              and support for both franchisees and customers, ensuring any
              queries or concerns are addressed promptly with professionalism
              and sensitivity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutDetails;
