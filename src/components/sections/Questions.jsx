import { styles } from "../../styles.js";
import "../../CSS/ButtonStyles.css";

const Questions = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto `}>
      <h2 className="text-[24px] font-semibold leading-10 mb-20">
        Any questions?
      </h2>

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
