import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/b.png";

import { Card } from "flowbite-react";
import { FaGraduationCap } from "react-icons/fa";
import Office from "../assets/office.png";
function Courses() {
  const [showAll, setShowAll] = useState(false);
  const cards = [
    {
      name: "Ms-Office",
      icon: FaGraduationCap,
      description:
        "Learn essential office productivity tools like Word, Excel, PowerPoint, and Outlook. Master document creation, data analysis, presentations, and email management.",
    },
    {
      name: "Tally",
      icon: FaGraduationCap,
      description:
        "Gain proficiency in Tally, the leading accounting software. Learn accounting principles, inventory management, financial reporting, and taxation using Tally ERP 9.",
    },
    {
      name: "CCC",
      icon: FaGraduationCap,
      description:
        "Develop foundational computer skills covering basic concepts of computer hardware, software, operating systems, internet usage, and productivity tools.",
    },
    {
      name: "DTP",
      icon: FaGraduationCap,
      description:
        "Discover the art of desktop publishing to create professional-quality documents, flyers, brochures, and other publications using software like Adobe InDesign or CorelDRAW.",
    },
    {
      name: "Auto-CAD",
      icon: FaGraduationCap,
      description:
        "Dive into computer-aided design (CAD) with AutoCAD. Learn to create precise 2D and 3D drawings, architectural designs, and engineering layouts.",
    },
    {
      name: "PGDCA",
      icon: FaGraduationCap,
      description:
        "Advance your computer skills with a comprehensive diploma program covering programming languages, database management, system analysis, and project management.",
    },
    {
      name: "Hardware",
      icon: FaGraduationCap,
      description:
        "Understand computer hardware fundamentals including components, assembly, troubleshooting, and maintenance to build and repair computers effectively.",
    },
    {
      name: "Networking",
      icon: FaGraduationCap,
      description:
        "Explore the world of computer networks, including LANs, WANs, routers, switches, protocols, and security measures to design, implement, and manage network infrastructures.",
    },
    {
      name: "Web-Design",
      icon: FaGraduationCap,
      description:
        "Master the art of web design by learning HTML, CSS, JavaScript, and web development frameworks. Create responsive and visually appealing websites and web applications.",
    },
    {
      name: "Mobile-Repairing",
      icon: FaGraduationCap,
      description:
        "Acquire skills to diagnose and repair mobile devices such as smartphones and tablets. Learn about hardware components, troubleshooting techniques, and software repair methods.",
    },
    {
      name: "Beauty Parlor",
      icon: FaGraduationCap,
      description:
        "Enter the beauty industry by learning essential skills in skincare, makeup application, hairstyling, and salon management to start your own beauty parlor or work as a professional beautician.",
    },
  ];

  return (
    <div
      className="flex flex-col pt-4 pb-3 items-center"
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
        {cards.slice(0, showAll ? cards.length : 3).map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full sm:max-w-sm sm:w-fit"
          >
            <Card className="h-60" href="#">
              <h5 className="text-2xl flex justify-stretch items-center gap-3  tracking-tight text-gray-900 dark:text-white">
                <span className="text-4xl">
                  <course.icon /> {/* Render the icon component */}
                </span>
                <span className="font-josefin">{course.name}</span>
              </h5>
              <hr />
              <p className="font-serif text-justify">{course.description}</p>
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
