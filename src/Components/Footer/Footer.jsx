import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <a
            href="mailto:rshrivas@gmail.com"
            className="flex items-center gap-1"
          >
            <MdOutlineEmail size={20} />
            rshrivas373@gmail.com
          </a>
        </li>

        <li className="flex gap-1 items-center">
          <a
            href="https://www.linkedin.com/in/rohit-kumar-shrivas-56116521b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <CiLinkedin />
            Linkedin.com/rohit
          </a>
        </li>

        <li className="flex gap-1 items-center">
          <a
            href="https://github.com/ryzen234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <FaGithub />
            github.com/ryzen234
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
