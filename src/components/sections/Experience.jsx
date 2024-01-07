import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../datacontent/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import ExperienceCard from "../cards/ExperienceCard.jsx";
import { textVariant } from "../../utils/motion.js";
import SectionTitle from "../hoc/SectionTitle.jsx";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-20">
        <SectionTitle title="Work Experience" />
      </motion.div>

      <motion.div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
