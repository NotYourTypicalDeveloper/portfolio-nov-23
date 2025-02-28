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

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.sectionSubText}`}
      >
        Explore my recent professional work and hobby projects. Click the link
        icons for live demos and the GitHub icon to view the repositories. Some
        projects are internal and not publicly available, while additional side
        projects can be found on GitHub.
      </motion.p>

      <div className="grid grid-cols-1 mt-16 justify-items-center xl:justify-items-start lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
