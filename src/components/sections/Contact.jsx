import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../../utils/motion.js";
import { motion } from "framer-motion";
import GeometricCanvas from "../canvas/GeometricCanvas.jsx";

import SectionTitle from "../hoc/SectionTitle.jsx";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Caroline",
          from_email: form.email,
          to_email: `${process.env.REACT_APP_MYEMAIL}`,
          message: form.message,
        },
        process.env.REACT_APP_PUB_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank You, I will get back to you asap");

        setForm({
          name: "",
          email: "",
          message: "",
        }),
          (err) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong.");
          };
      });
  };

  return (
    <div className="flex flex-col lg:gap-10 lg:flex-row ">
      {/* CONTACT FORM_____  */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1"
      >
        <SectionTitle title="Contact" />

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
            className="px-8 py-3 text-white uppercase border-2 border-solid shadow-md outline-none white bg-tertiary rounded-xl w-fit shadow-primary"
          >
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* 3D MODEL SECTION_____ */}
      <div className="flex-1 mt-6 bg-indigo-500 lg:mt-0">
        <GeometricCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
