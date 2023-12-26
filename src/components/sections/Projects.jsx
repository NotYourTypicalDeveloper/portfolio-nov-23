import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import { projects } from "../../datacontent/index.js";
import { fadeIn, textVariant } from "../../utils/motion.js";
import ProjectCard from "../cards/ProjectCard.jsx";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects.</h2>

        <div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-10 text-secondary text[17px] max-w-3xl leading-[30px]"
          >
            Recent Real-world professional projects and Hobby Side-projects.
            Click on the link icons to see the deployed project and the github
            icon to see the repo. Note that some projects are not available as
            they were internal applications not open to the public. More side
            projects are available on Github.
          </motion.p>
        </div>

        <div className="flex flex-wrap mt-16 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");