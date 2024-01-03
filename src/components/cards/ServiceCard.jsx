import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles.js";
import { fadeIn, textVariant } from "../../utils/motion.js";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-48 w-60">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full 
        bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700
         p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className={
            "bg-tertiary rounded-[20px] py-2 px-2 min-h-[220px] flex justify-evenly items-center flex-col"
          }
        >
          <img src={icon} alt={title} className="max-w-[60%]" />
          <h3 className="text-center text-white font-RobotoMonoSS text-md">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
