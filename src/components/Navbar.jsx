import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles.js";
import { navLinks } from "../datacontent/index.js";
import { logo2, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        {/* Logo__ */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo2} alt="logo" className="object-contain w-10 h-10" />

          <p className="text-white">Caroline Ho</p>
        </Link>

        {/* navbar links__ */}
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="ref">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Burger menu mobile view 🍔 */}
        <div className="flex items-center justify-end flex-1 sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="burger menu"
            className="w-[28] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
