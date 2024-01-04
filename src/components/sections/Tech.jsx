import React from "react";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";
import { BallCanvas } from "../index.js";
import { technologies } from "../../datacontent/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2>
          <span className={`${styles.sectionHeadText} marker-underlining`}>
            Technologies.
          </span>
        </h2>
      </motion.div>
      <motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
          {technologies.map((tech) => (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
