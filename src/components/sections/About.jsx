import React from "react";
import ServiceCard from "../cards/ServiceCard.jsx";
import { motion } from "framer-motion";
import { styles } from "../../styles.js";
import { services } from "../../datacontent/index.js";
import { fadeIn, textVariant } from "../../utils/motion.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[-17px] max-w-3xl leading-[30px] mt-10"
      >
        Driven and resourceful, my coding journey started in 2019. Since then, I
        have successfully built various projects using my creative thinking and
        brought efficient designs to life. Fascinated by the web in general, I
        have a strong interest in the logic and algorithmic side of programming,
        as well as automation. Additionally, I am an enthusiast for 3D,
        animations, and chatbots.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-10 mt-16">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
