import React from "react";
import { motion } from "framer-motion";
import Pic from "../assets/why.png";
import { MdRectangle } from "react-icons/md";
function Why() {
  return (
    <div className="mt-5 flex flex-col gap-4 lg:mx-10 md:mx-10 justify-center items-center">
      <h1 className="text-xl border-b-2 font-serif border-yellow-300 lg:text-2xl font-semibold text-center ">
        Why Become an RTAC Member?
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col border-2 rounded-lg px-10 py-2 md:flex-row justify-center items-center gap-10  bg-white text-gray-800"
      >
        <img className="w-40 h-36 sm:w-72 sm:h-64" src={Pic} alt="" />
        <div className="flex flex-col gap-4 font-josefin">
          <div className="text-lg flex gap-3  text-justify  font-josefin">
            <span className="text-sm mt-2 text-customYellow">
              <MdRectangle />
            </span>
            <span>
              RTAC Education offers computer education courses that are
              synchronized with advanced technological revolution at global
              level. RTAC Education is a team of professionals to support and
              care the associates all around. This ensures that every student of
              RTAC Education shares a very special relationship with the
              Institute. RTAC has taken up the activity to elevate business
              people to set up a foundation for giving training certificate
              course to the students.
            </span>
          </div>
          <div className="text-lg flex  gap-3  text-justify  font-josefin">
            <span className="text-sm mt-2 text-customYellow">
              <MdRectangle />
            </span>
            <span>
              It's simple to work with us. We are serious about the task, but
              not about our selves.
            </span>
          </div>
          <div className="text-lg flex  gap-3  text-justify  font-josefin">
            <span className="text-sm mt-2 text-customYellow">
              <MdRectangle />
            </span>
            <span>
              That's how we want to be treated, and that's how we
              treat our clients.
            </span>
          </div>
          <div className="text-lg flex  gap-3  text-justify  font-josefin">
            <span className="text-sm mt-2 text-customYellow">
              <MdRectangle />
            </span>
            <span>
              Opportunities for growth and expansion in the thriving field of
              computer education.
            </span>
          </div>
          <div className="text-lg flex  gap-3  text-justify  font-josefin">
            <span className="text-sm mt-2 text-customYellow">
              <MdRectangle />
            </span>
            <span>
              Comprehensive training and ongoing support for franchise partners.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Why;
