import React from "react";
import { FaChartLine } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { FcIdea } from "react-icons/fc";
function Gols() {
  return (
    <>
      <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 gap-4">
        <div className=" p-4 border-b-8 border-2 rounded-b-lg border-b-red-400 rounded-t-md">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div
              className="text-6xl  p-2  text-black rounded-full "
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <FiTarget />
            </div>
            <div className="text-justify">
              Our aim is to provide quality educational products and services
              that enable students to achieve their learning goals and reach
              their full potential. We create a positive learning environment
              that promotes collaboration, creativity, and lifelong learning.
            </div>
          </div>
        </div>
        <div className=" p-4 border-b-8 border-2 rounded-b-lg border-b-red-400 rounded-t-md">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div
              className="text-6xl  p-2  rounded-full "
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <FcIdea />
            </div>
            <div className="text-justify">
              Our goal is to build trusting relationships with students that
              will help them become independent, more self-assured, and
              knowledgeable about technology.
            </div>
          </div>
        </div>
        <div className=" p-4 border-b-8 border-2 rounded-b-lg border-b-red-400 rounded-t-md">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div
              className="text-5xl  p-3  rounded-full "
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <FaChartLine />
            </div>
            <div className="text-justify">
              The development of abilities that prepare Students for success in
              computer studies and beyond is our aim
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gols;
