import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function EnquiryForm() {
  return (
    <>
      <div className="p-4 flex flex-col justify-center items-center me-3 gap-4">
        <div>
          <h1 className="font-serif text-2xl text-red-400">ENQUIRY FORM</h1>
          <span className="flex justify-center items-center gap-1">
            <span>------</span>
            <span className="text-2xl">
              <FaGraduationCap />
            </span>
            <span>------</span>
          </span>
        </div>
        <div>
          <input
            type="text"
            className="p-2 rounded-md bg-slate-100 focus:ring-2 focus:ring-red-400 outline-none focus:outline-none"
            name=""
            id=""
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            className="p-2 rounded-md bg-slate-100 focus:ring-2 focus:ring-red-400 outline-none focus:outline-none"
            name=""
            id=""
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="text"
            className="p-2 rounded-md bg-slate-100 focus:ring-2 focus:ring-red-400 outline-none focus:outline-none"
            name=""
            id=""
            placeholder="Phone number"
          />
        </div>
        <button className="bg-red-400 px-10 py-2 rounded-md font-bold">
          Submit
        </button>
      </div>
    </>
  );
}

export default EnquiryForm;
