import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaGithubSquare,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostman, SiShadcnui } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <div id="skills" className="min-h-[calc(100vh-60px)] w-full mt-[60px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-5xl mt-12 mb-6 font-bold">Skills</h1>
        <div className="md:w-1/2 sm:w-[60%] w-[90%] lg:w-[40%]">
          <p className="text-[16px] md:text-lg text-zinc-400 text-center">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-10 gap-10 sm:gap-0">
        <div
          style={{ boxShadow: "0px 0px 8px blueviolet" }}
          className="__left h-[350px] shadow-xl rounded-2xl border-[1px] border-[blueviolet] w-full md:h-[420px] lg:h-[350px] md:w-[450px] bg-[#101725] p-4 md:mr-5 sm:mb-10 md:mb-0"
        >
          <h1 className="text-center mb-4 text-2xl sm:text-3xl text-zinc-400 font-bold">
            Frontend
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-zinc-400 font-medium">
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <RiReactjsFill className="text-xl text-[aqua]" />
              ReactJS
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <RiTailwindCssFill className="text-xl text-[aqua]" />
              TailwindCSS
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <FaHtml5 className="text-xl text-[#E85527]" />
              HTML
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <FaCss3Alt className="text-xl text-[#235DED]" />
              CSS
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <IoLogoJavascript className="text-xl text-[#F0DC4E]" />
              JavaScript
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <BiLogoTypescript className="text-xl text-[#F0DC4E]" />
              TypeScript
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <SiShadcnui className="text-xl" />
              Shadcn UI
            </span>
          </div>
        </div>
        <div
           style={{ boxShadow: "0px 0px 8px blueviolet" }}
           className="__left h-[350px] shadow-xl rounded-2xl border-[1px] border-[blueviolet] w-full md:h-[420px] lg:h-[350px] md:w-[450px] bg-[#101725] p-4 md:mr-5 sm:mb-10 md:mb-0"
        >
          <h1 className="text-center mb-4 text-2xl sm:text-3xl text-zinc-400 font-bold">
            Backend
          </h1>
          <div className="flex justify-center flex-wrap items-center gap-4 text-zinc-400 font-medium">
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <FaNodeJs className="text-xl text-[#48A94C]" />
              NodeJs
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <SiExpress className="text-xl font-bold text-[gray]" />
              ExpressJs
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <SiMongodb className="text-xl text-[#3F8B35]" />
              MongoDB
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <IoLogoJavascript className="text-xl text-[#F0DC4E]" />
              JavaScript
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <BiLogoTypescript className="text-xl text-[#F0DC4E]" />
              TypeScript
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center pb-10">
        <div
            style={{ boxShadow: "0px 0px 8px blueviolet" }}
            className="__left h-[350px] shadow-xl rounded-2xl border-[1px] border-[blueviolet] w-full md:h-[420px] lg:h-[350px] md:w-[450px] bg-[#101725] p-4 md:mr-5 sm:mb-10 md:mb-0"
        >
          <h1 className="text-center mb-4 text-2xl sm:text-3xl text-zinc-400 font-bold">
            Others
          </h1>
          <div className="flex justify-center flex-wrap items-center gap-4 text-zinc-400 font-medium">
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <FaGitAlt className="text-xl text-[#DD4B34]" />
              Git
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <FaGithub className="text-xl font-bold text-white" />
              GitHub
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <VscVscode db className="text-xl text-[#20B1F3]" />
              VSCode
            </span>
            <span className="border py-2 px-4 rounded-xl border-zinc-400 flex justify-center items-center gap-2">
              <SiPostman className="text-xl text-[#FB6A33]" />
              PostMan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
