import React from "react";
import { FaGithub, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-10">
      <h1 className="text-4xl mt-12 mb-6 font-bold text-[#854CE6]">
        Salman Shaikh
      </h1>
      <div>
        <ul className="flex justify-center items-center gap-5 flex-wrap md:gap-10 text-lg">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#certification">Certification</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-6 my-7 text-3xl">
          <a target="_blank" href="https://linkedin.com/in/salman-shaikh-aa15b9253">
            <FaLinkedin className="cursor-pointer text-[white] bg-black hover:scale-105 transition-all ease-in-out duration-300" />
          </a>
          <a target="_blank" href="https://github.com/salmanshaikh18">
            <FaGithubSquare className="cursor-pointer bg-black hover:scale-105 transition-all ease-in-out duration-300" />
          </a>
        </div>
      </div>
      <p className="py-4 text-sm">&copy; Salman Shaikh. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
