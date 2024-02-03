import React from "react";
import { chatboticoncontact } from "../../assets/index.js";
import { styles } from "../../styles.js";
import "../../CSS/ButtonStyles.css";

const Questions = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <h2 className="mb-10 text-xl font-RobotoMonoSS md:text-2xl 2xl:mb-20">
          Ask any question or send a request ...
        </h2>

        <img
          src={chatboticoncontact}
          alt="chatbot image"
          className="object-cover w-20 origin-top-left rotate-12 h:20 lg:h-28 lg:w-28"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6 justify-items-center md:grid-cols-2">
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
    </section>
  );
};

export default Questions;
