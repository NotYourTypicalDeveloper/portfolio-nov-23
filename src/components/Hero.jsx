import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas/index.js";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* vertical bar */}
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* Intro text  */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Salut, I'm <span className="text-[#915eff]">Caroline</span>.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Web Applications | Front End Developer
            <br className="hidden sm:block" /> & Table tennis league player
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
