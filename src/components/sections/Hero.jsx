import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";
import { styles } from "../../styles.js";
import { StarsCanvas } from "../canvas/index.js";

const Hero = () => {
  return (
    <>
      <section className={`relative w-full h-auto ${styles.padding}`}>
        {/* Intro text___  */}
        <motion.div
          variants={textVariant()}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 flex`}
        >
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Salut, I'm <span className="text-[#915eff]">Caroline</span>.
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Web Applications | Front End Developer
            </p>
          </div>
          <div>PIC</div>
        </motion.div>
        {/* 3D design___  */}
        <StarsCanvas />
      </section>
    </>
  );
};

export default Hero;
