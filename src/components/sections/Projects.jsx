import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import { projects } from "../../datacontent/index.js";
import { fadeIn, textVariant } from "../../utils/motion.js";
import ProjectCard from "../cards/ProjectCard.jsx";
import SectionTitle from "../hoc/SectionTitle.jsx";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <SectionTitle title="Projects" />
      </motion.div>

      <div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionSubText}`}
        >
          Recent Real-world professional projects and Hobby Side-projects. Click
          on the link icons to see the deployed project and the github icon to
          see the repo. Note that some projects are not available as they were
          internal applications not open to the public. More side projects are
          available on Github.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 mt-16 justify-items-center lg:justify-items-start lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
