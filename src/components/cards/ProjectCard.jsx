import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import Tilt from "react-parallax-tilt";
import { github, iconlink } from "../../assets/index.js";
import { styles } from "../../styles.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-translucidWhite p-5 rounded-xl sm:w-[360px] w-full h-full"
      >
        {/* Project screenshot___  */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        {/* Github vignette___  */}
        {source_code_link && (
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient hover:scale-125"
            >
              <img
                src={github}
                alt="github"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        )}

        {/* TITLE and Link icon  */}
        <div className="mt-5">
          <div className="flex items-center">
            <h3 className={`${styles.cardTitle} min-h-24`}>{name}</h3>

            {live_site_link && (
              <a
                className="ml-2 z-[2] hover:scale-125"
                href={live_site_link}
                target="_blank"
              >
                <img className="h-5 " src={iconlink} alt="link icon" />
              </a>
            )}
          </div>

          <p className={`${styles.smallerCardText}`}>{description}</p>
        </div>
        {/* Hash tags___  */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[0.85rem] ${tag.color}`}>
              #{tag.name.toLowerCase()}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
