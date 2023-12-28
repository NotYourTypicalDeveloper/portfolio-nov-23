import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles.js";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../../utils/motion.js";
import { motion } from "framer-motion";
import ComputersCanvas from "../canvas/Computers.jsx";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className="flex flex-col overflow-hidden lg:gap-10 lg:flex-row">
      {/* CONTACT FORM_____  */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1"
      >
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          className="flex flex-col gap-8"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          {/* Name___ */}
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Roger Rabbit"
              className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
            />
          </label>

          {/* EmailL___ */}
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your E-mail</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="roger@rabbit.com"
              className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
            />
          </label>

          {/* Message___ */}
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here"
              className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
            />
          </label>
          <button
            type="submit"
            className="px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary rounded-xl w-fit shadow-primary"
          >
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* 3D MODEL SECTION_____ */}
      <div className="flex-1 overflow-hidden">
        <ComputersCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
