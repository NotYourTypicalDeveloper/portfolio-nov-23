import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";
import { styles } from "../../styles.js";
import { StarsCanvas } from "../canvas/index.js";
import { ProfilePic } from "../atoms/ProfilePic.jsx";

const Hero = () => {
  return (
    <>
      <section className={`relative w-full h-auto`}>
        {/* Intro text___  */}
        <motion.div
          variants={textVariant()}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-16 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:pt-24`}
        >
          <div className=" lg:pr-12">
            <ProfilePic />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hey, I'm <span className="text-indigo-500">Caroline</span>.
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Web Applications | Front End Developer
            </p>
          </div>
        </motion.div>
        {/* 3D design___  */}
        <StarsCanvas />
      </section>
    </>
  );
};

export default Hero;
