import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";
import { styles } from "../../styles.js";
import { ProfilePic } from "../atoms/ProfilePic.jsx";
import StarsCanvas from "../canvas/StarsCanvas.jsx";

const Hero = () => {
  return (
    <>
      {/* Intro text___  */}
      <motion.div
        variants={textVariant()}
        className={`${styles.padding} h-full max-w-7xl mx-auto relative z-0 flex flex-col lg:flex lg:flex-row-reverse lg:justify-between lg:items-center gap-10`}
      >
        <div className="mx-auto lg:pr-12">
          <ProfilePic />
        </div>

        <div className="text-center xl:max-w-xl">
          <h1 className={`${styles.heroHeadText}`}>
            Hey, I'm <span className="text-indigo-500">Caroline</span>.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Web Applications | Front End Developer
          </p>
        </div>
      </motion.div>
      <StarsCanvas />
    </>
  );
};

export default Hero;
