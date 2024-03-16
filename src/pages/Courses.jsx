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
      className="flex flex-col pt-4 pb-3 shadow-lg items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <div className="text-3xl font-bold font-mono">
        OUR <span className="text-yellow-300">COURSES</span>
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
              <h5 className="text-2xl flex justify-center items-center gap-3 font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="text-4xl">
                  <FaGraduationCap />
                </span>
                <span>{course}</span>
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
            className="text-white font-bold rounded-md px-10 py-2 bg-red-600"
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
