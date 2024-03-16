import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/b.png";

import { Card } from "flowbite-react";
import { FaGraduationCap } from "react-icons/fa";

function Courses() {
  const [showAll, setShowAll] = useState(false);
  const cards = [
    "Ms-Office",
    "Tally",
    "CCC",
    "DTP",
    "Auto-CAD",
    "PGDCA",
    "Hardware",
    "Networking",
    "Web-Design",
    "Mobile-Repairing",
    "Beauty Parlor",
  ];

  return (
    <div
      className="flex flex-col pt-4 pb-3  items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <div className="text-3xl border-b-2 border-yellow-300 font-serif font-semibold">
        OUR <span className="">COURSES</span>
      </div>
      <div className="mt-1 flex flex-wrap px-10 py-5 gap-2 sm:justify-center">
        {cards.slice(0, showAll ? cards.length : 5).map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full sm:max-w-sm sm:w-fit"
          >
            <Card href="#">
              <h5 className="text-2xl flex justify-stretch items-center gap-3  tracking-tight text-gray-900 dark:text-white">
                <span className="text-4xl">
                  <FaGraduationCap />
                </span>
                <span className="font-mono">{course}</span>
              </h5>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex mb-2 justify-center items-center"
      >
        {!showAll && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative text-white bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 px-10 py-2 font-serif rounded-md font-bold"
            onClick={() => setShowAll(true)}
          >
            More Courses
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}

export default Courses;
