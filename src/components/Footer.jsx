import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <div id="contact" className="flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center items-center gap-6 my-7 text-3xl bg-slate-800s px-2 rounded-md py-4">
        
        <h1 className="text-3xl sm:text-4xl mt-12 mb-6 font-bold text-[#854CE6]">
        Connect With Me
      </h1>
        <div className="flex justify-center items-center gap-6 my-4 text-3xl">
          <a
            className="flex justify-center items-center"
            target="_blank"
            href="https://linkedin.com/in/salman-shaikh-aa15b9253"
          >
            <FaLinkedin className="cursor-pointer text-slate-400 hover:scale-105 transition-all ease-in-out duration-300" /> 
          </a>
          <a target="_blank" href="mailto:salmanshaikh18786@gmail.com">
            <MdEmail className="cursor-pointer text-3xl text-slate-400 scale-105 hover:scale-110 transition-all ease-in-out duration-300" />
          </a>
          <a target="_blank" href="https://github.com/salmanshaikh18">
            <FaGithubSquare className="cursor-pointer text-slate-400 hover:scale-105 transition-all ease-in-out duration-300" />
          </a>
        </div>
      </div>
      <h1 className="text-zinc-3000 mb-10 text-xl">Salman Shaikh</h1>
      <div>
        <ul className="flex justify-center items-center gap-5 flex-wrap md:gap-10 text-lg text-[#7C73E6]">
          <li>
            <a className="hover:text-[blueviolet] transition-all ease-in-out duration-300" href="#about">About</a>
          </li>
          <li>
            <a className="hover:text-[blueviolet] transition-all ease-in-out duration-300" href="#skills">Skills</a>
          </li>
          <li>
            <a className="hover:text-[blueviolet] transition-all ease-in-out duration-300" href="#projects">Projects</a>
          </li>
          <li>
            <a className="hover:text-[blueviolet] transition-all ease-in-out duration-300" href="#certification">Certification</a>
          </li>
          <li>
            <a className="hover:text-[blueviolet] transition-all ease-in-out duration-300" href="#education">Education</a>
          </li>
        </ul>
        <ContactUs />
      </div>
      <p className="py-4 text-sm">&copy; Salman Shaikh. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
