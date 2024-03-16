import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

function StickyFooter() {
  return (
    <>
      <div className="flex flex-col mb-2 cursor-pointer w-fit">
        <motion.div
          className="flex gap-2 bg-black  bg-opacity-30 hover:bg-green-200 font-bold w-fit p-2 rounded-r-full"
          whileHover={{ x: 0 }}
          initial={{ x: -90 }}
        >
          <span>Whatsapp</span>
          <motion.span
            className="text-2xl text-green-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IoLogoWhatsapp />
          </motion.span>
        </motion.div>
      </div>

      <div className="flex flex-col mb-2 cursor-pointer">
        <motion.div
          className="flex gap-[12px] bg-black  bg-opacity-30 hover:bg-red-200 font-bold w-fit p-2 rounded-r-full"
          whileHover={{ x: 0 }}
          initial={{ x: -90 }}
        >
          <span>Call Now!</span>
          <motion.span
            className="text-2xl text-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PiPhoneCallFill />
          </motion.span>
        </motion.div>
      </div>
      <div className="flex flex-col mb-2 cursor-pointer">
        <motion.div
          className="flex gap-6 bg-black  bg-opacity-30 hover:bg-yellow-200 font-bold w-fit p-2 rounded-r-full"
          whileHover={{ x: 0 }}
          initial={{ x: -95 }}
        >
          <span>Message</span>
          <motion.span
            className="text-2xl text-yellow-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MdEmail />
          </motion.span>
        </motion.div>
      </div>
    </>
  );
}

export default StickyFooter;
