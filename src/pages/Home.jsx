import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import D from "../assets/d.jpg";

function Home() {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityRange = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: yRange, opacity: opacityRange }}
          className="absolute inset-0 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${D})` }}
        ></motion.div>
      </div>
      <div className="relative z-9 h-full flex flex-col justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl px-8 py-6 bg-gray-800 bg-opacity-70 shadow-lg rounded-lg text-gray-100"
        >
          <h1 className="text-4xl font-bold mb-6">Welcome, RTAC Education</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-lg"
          >
            Unlocking the Potential of Technology: Computer Education at Its
            Finest At our computer education Institute, we are dedicated to
            providing students with the necessary skills and knowledge to take
            full advantage of today's ever-evolving technology. We strive to
            create a learning environment that encourages exploration,
            creativity, and collaboration, while also teaching essential
            technical concepts and skills. Our experienced instructors offer
            hands-on instruction, utilizing the latest in hardware and software
            tools to ensure that our students receive the best possible
            preparation for their future endeavors. From basic computing
            fundamentals to advanced programming techniques, our comprehensive
            curriculum will help equip students with the skills they need to
            succeed in any technological field. With our commitment to
            excellence, we are unlocking the potential of technology for
            generations of learners.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
