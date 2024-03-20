import React from "react";
import { motion } from "framer-motion";
import Pic from "../assets/home.png";
function Home() {
  return (
    <div className="mt-5 flex flex-col gap-4 lg:mx-40 md:mx-10 justify-center items-center">
      <h1 className="text-2xl border-b-2 font-serif border-yellow-300 lg:text-3xl font-semibold text-center ">
        Welcome, RTAC Education
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row justify-center items-center gap-5 px-4 bg-white text-gray-800"
      >
        <img className="w-56 h-56 sm:w-80 sm:h-80" src={Pic} alt="" />
        <div className="flex flex-col gap-4 font-josefin">
          <div className="text-lg   text-justify  font-josefin">
            RTAC Education provides franchise opportunities to passionate
            business entrepreneurs for imparting value addition services for
            computer training and computer education. Computer Education
            Franchise is one of the top most Franchise Business in India.
            Starting a computer education franchise is one of the best business
            plans for entrepreneurs. So, if you are want to starting a Franchise
            Business then you can choose RTAC education.
          </div>
          <div className="text-lg leading-relaxed text-justify  font-josefin">
            RTAC Education giving new opportunities to the students as well as
            their centres. Today, we have wide network of authorized training
            centres. This is very important for us about quality education and
            continuing support for our valuable franchisee partners.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
