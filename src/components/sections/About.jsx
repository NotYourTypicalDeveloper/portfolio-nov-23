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
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={` ${styles.sectionSubText}`}
      >
        In 1998, I discovered the Internet, which changed my life for ever.
        Fascinated by the web in general, I decided that one day I will become a
        Web Developer. In 2018, my coding journey started. Driven and
        resourceful, I successfully built various apps & websites using my
        creative thinking and strong logic. I enjoy the algorithmic side of
        programming, and have an interest in automation, 3D, animations, and
        chatbots.
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
