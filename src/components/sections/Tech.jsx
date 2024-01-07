import React from "react";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";
import { BallCanvas } from "../index.js";
import { technologies } from "../../datacontent/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const Tech = () => {
  // ONLY FOR ANDROID devices
  if (navigator.userAgent.match(/Android/i)) {
    return (
      <div>
        <div className="flex flex-row flex-wrap justify-center my-16 gap-14">
          {technologies.map((tech) => (
            <div className="w-28 h-28" key={tech.name}>
              <img
                src={tech.icon}
                alt={tech.name}
                className="object-cover w-full h-full"
              />
              <p className="text-center">{tech.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 font-bold">
          uh Oh!! Your device is an Android phone 😝. 3D is not well supported.
          Please watch my portfolio on desktop or iOs devices to get the optimum
          experience.
        </p>
      </div>
    );
  } else {
    return (
      <>
        <motion.div variants={textVariant()}>
          <h2>
            <span className={`${styles.sectionHeadText} marker-underlining`}>
              Technologies.
            </span>
          </h2>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
          {technologies.map((tech) => (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default SectionWrapper(Tech, "tech");
