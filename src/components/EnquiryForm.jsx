import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";

function EnquiryForm() {
  const key = import.meta.env.VITE_EMAIL_KEY;
  const [state, handleSubmit] = useForm(key);
  if (state.succeeded) {
    toast.success(
      "Your request has been successfully submitted. We will connect with you as soon as possible."
    );
  }
  return (
    <>
      <div className="p-4 flex flex-col justify-center items-center me-3 gap-4">
        <div>
          <h1 className="font-serif text-2xl text-red-400">INQUIRY FORM</h1>
          <span className="flex justify-center items-center gap-1">
            <span>------</span>
            <span className="text-2xl">
              <FaGraduationCap />
            </span>
            <span>------</span>
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 justify-center items-center"
          action=""
        >
          <div>
            <input
              type="text"
              className="p-2 rounded-md bg-slate-100 focus:ring-2 focus:ring-red-400 outline-none focus:outline-none"
              name="name"
              id="name"
              placeholder="Name"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </div>
          <div>
            <input
              type="email"
              className="p-2 rounded-md bg-slate-100 focus:ring-2 focus:ring-red-400 outline-none focus:outline-none"
              name="email"
              id="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <input
              type="text"
              className="p-2 rounded-md bg-slate-100 focus:ring-2 focus:ring-red-400 outline-none focus:outline-none"
              name="phone"
              id="phone"
              placeholder="Phone number"
            />
            <ValidationError
              prefix="phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div>
            <input
              type="text"
              className="p-2 rounded-md bg-slate-100 focus:ring-2 focus:ring-red-400 outline-none focus:outline-none"
              name="city"
              id=""
              placeholder="City"
            />
            <ValidationError prefix="city" field="city" errors={state.errors} />
          </div>
          <div className="w-full">
            <textarea
              rows={2}
              type="text"
              className="p-2 w-full rounded-md bg-slate-100 focus:ring-2 focus:ring-red-400 outline-none focus:outline-none"
              name="message"
              id=""
              placeholder="message"
            />
            <ValidationError
              prefix="message"
              field="message"
              errors={state.errors}
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 px-10 py-2 rounded-md font-bold"
            disabled={state.submitting}
          >
            {state.submitting ? "submitting" : "Submit"}
          </motion.button>
        </form>
      </div>
    </>
  );
}

export default EnquiryForm;
