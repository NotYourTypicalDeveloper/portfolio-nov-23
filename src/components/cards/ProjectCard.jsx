import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import Tilt from "react-parallax-tilt";
import { github } from "../../assets/index.js";
import { styles } from "../../styles.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
          />{" "}
        </div>

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
          >
            <img
              src={github}
              alt="github"
              className="object-contain w-1/2 h-1/2"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className={`${styles.cardTitle}`}>{name}</h3>
          <p className={`${styles.cardText}`}>{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[0.85rem] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
