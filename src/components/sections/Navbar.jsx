import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles.js";
import { navLinks } from "../../datacontent/index.js";
import { diamond_logo, menu, close, github } from "../../assets/index.js";
import LinkedInIcon from "../atoms/LinkedInIcon.jsx";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const linkedInURL = `https://www.linkedin.com/in/codingms/`;
  const githubURL = "https://github.com/NotYourTypicalDeveloper";

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        {/* My logo__ */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={diamond_logo}
            alt="logo"
            className="object-contain w-12 h-12 lg:w-14"
          />

          <p className="hidden font-normal bg-gradient-pinkGreenGradient lg:block">
            Caroline_Ho
          </p>
        </Link>

        {/* Navbar links__ */}
        <ul className="flex-row hidden gap-10 list-none sm:flex ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-[#6473e8]"
              } hover:text-white text-sm lg:text-base font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="ref">
                {link.title}
              </a>
            </li>
          ))}
          <li key="LinkedIn-link-desktop" onClick={() => setActive("LinkedIn")}>
            <a href={`${linkedInURL}`} className="ref" target="_blank">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href={`${githubURL}`}
              target="_blank"
              className="h-inherit max-h-5"
            >
              <img
                src={github}
                alt="github logo link"
                className="object-cover h-8"
              />
            </a>
          </li>
        </ul>

        {/* MOBILE VIEW 📱 ===========  */}
        {/* Burger menu icon ___ */}
        <div className="flex items-center justify-end flex-1 sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="burger menu"
            className="w-[28] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Menu itself___  */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 w-[90%] bg-primary absolute top-20 right-0 mx-4 my-2 min-w [140px] z-10`}
        >
          <ul className="flex flex-col items-start justify-end gap-6 list-none ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-[#6473e8]"
                } font-poppins text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`} className="ref">
                  {link.title}
                </a>
              </li>
            ))}

            <li
              key="linkedin-link-mobile"
              className={`${
                active === "LinkedIn" ? "text-white" : "text-[#6473e8]"
              } font-poppins text-[16px] font-medium cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive("LinkedIn");
              }}
            >
              <a href={`${linkedInURL}`} target="_blank">
                LinkedIn
              </a>
            </li>
            <li
              key="github-link-mobile"
              className={`${
                active === "Github" ? "text-white" : "text-[#6473e8]"
              } font-poppins text-[16px] font-medium cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive("Github");
              }}
            >
              <a href={`${githubURL}`} target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
