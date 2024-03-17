import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/RTAC_Logo_Without _Border.png";

function Home() {
  return (
    <div className="mt-10 flex flex-col lg:mx-40 md:mx-10 justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome, RTAC Education
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="px-4 py-6 bg-white shadow-lg rounded-lg text-gray-800 flex items-center"
      >
        <div className="flex-1 ml-4 flex gap-2">
          <span className="text-lg flex-grow ">
            Unlocking the Potential of Technology: Computer Education at Its
            Finest At our computer education Institute, we are dedicated to
            providing students with the necessary skills and knowledge to take
            full advantage of today's ever-evolving technology. We strive to
            create a learning environment that encourages exploration,
            creativity, and collaboration, while also teaching essential
            technical concepts and skills.
          </span>{" "}
          <img
            src={Logo}
            alt="RTAC Logo"
            className="mx-auto  rounded-full h-72 w-72"
          />
          <span className="text-lg flex-grow">
            Our experienced instructors offer hands-on instruction, utilizing
            the latest in hardware and software tools to ensure that our
            students receive the best possible preparation for their future
            endeavors. From basic computing fundamentals to advanced programming
            techniques, our comprehensive curriculum will help equip students
            with the skills they need to succeed in any technological field.
            With our commitment to excellence, we are unlocking the potential of
            technology for generations of learners.
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
