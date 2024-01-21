import React from "react";
import { chatboticoncontact } from "../../assets/index.js";
import { styles } from "../../styles.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";
import "../../CSS/ButtonStyles.css";

const Questions = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex">
        <img
          src={chatboticoncontact}
          alt="chatbot image"
          className="object-cover absolute origin-top-left rotate-12 h:28 w-28 top-8 right-1 md:right-[-2rem] lg:right-[-2rem] lg:top-14 lg:h-36 lg:w-36"
        />
        <h2>
          <span className={`${styles.sectionHeadText} marker-underlining`}>
            Questions?
          </span>
        </h2>
      </motion.div>
      <p className={`${styles.sectionSubText} mt-16`}>
        Any questions, or request to send, click on ...
      </p>
      <div className="flex flex-col justify-around gap-20 mt-16 lg:flex lg:flex-row">
        <a
          href="https://notyourtypicaldeveloper.github.io/carolineVirtualAssistant/"
          className="button type--C"
        >
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text"> Speak to my chatbot!</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </a>
        <a
          href="https://job-contact-form.vercel.app/"
          className="button type--B"
        >
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text"> Send me your Job spec</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Questions, "questions");
