import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas/index.js";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          {/* Vertical bar___ */}
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-4 sm:h-80 violet-gradient" />
            {/* scroll GIF  */}
            <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-32">
              <a href="#about">
                <div className="w-[28px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                  <motion.div
                    animate={{ y: [0, 24, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="w-2 h-2 mb-1 rounded-full bg-secondary"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Intro text___  */}
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Salut, I'm <span className="text-[#915eff]">Caroline</span>.
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Web Applications | Front End Developer
            </p>
          </div>
        </div>
        {/* 3D design___  */}
        <ComputersCanvas />
      </section>
    </>
  );
};

export default Hero;
