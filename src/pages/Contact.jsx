import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="flex gap-8 justify-center flex-col-reverse items-center md:mx-44 sm:flex-row">
      <motion.div
        className="border-2 overflow-hidden rounded-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          className="h-80 w-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4019318017095!2d71.18456603151503!3d23.00901001000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395bd54c92fd08bd%3A0xd616a2b4b3d5a94b!2sParmar%20electronics!5e0!3m2!1sen!2sin!4v1710681613391!5m2!1sen!2sin"
          style={{
            border: "0",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </motion.div>
      <motion.div
        style={{}}
        className="flex bg-gray-50 rounded-md p-4 flex-col items-center gap-4  w-80"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="font-semibold font-serif border-b-4 border-yellow-300 text-2xl">
          Contact Us
        </div>
        <div className="flex flex-col justify-center gap-4">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="font-bold font-serif">Email</label>
            <div>
              <span className="font-poppins">rtacedu@gmail.com</span>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label className="font-bold font-serif">Mobile</label>
            <div>
              <span className="font-poppins">+91 777-888-1058</span>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <label className="font-bold font-serif">Address</label>
            <div className="flex justify-center text-sm w-full">
              <span className="font-poppins">
                A-209, Second Floor, Cross Road Complex Nr. Cross Road Hotel,
                Halvad-Dhrangadhra Highway, Sara Chokdi, Halvad, Dist- Morbi,
                Gujarat (363330)
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
