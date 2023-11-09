import React from "react";
import Tilt from "react-parallax-tilt";

import ServiceCard from "./ServiceCard.jsx";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../datacontent/index.js";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper.jsx";
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[-17px] max-w-3xl leading-[30px]"
      >
        I always thought web development would be (one of the) coolest job in
        the world. In 2019, I started my coding journey and has been building
        since then Business web applications, e-commerce platform and a few side
        projects. I am a 3D, web 3 enthusiast, I have an interest in chatbots
        and automation. Eager to learn, I am also determined and ambitious.
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
