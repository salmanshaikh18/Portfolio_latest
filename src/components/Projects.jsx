import React from "react";
import movieTimeVideo from "../assets/videos/movie-time.webm";
import codeSpaceVideo from "../assets/videos/CodeSpace.webm";
import aiAssistantVideo from "../assets/videos/AiAssistant.webm";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-[calc(100vh-60px)] mt-10 flex flex-col items-center justify-start"
    >
      <h1 className="text-4xl lg:text-5xl mt-12 mb-6 font-bold">Projects</h1>
      <div className="md:w-1/2 sm:w-[60%] w-[90%] lg:w-[40%]">
        <p className="text-[16px] md:text-lg text-zinc-400 text-center">
          I have worked on a wide range of projects. Here are some of my
          projects.
        </p>
      </div>
      <div className="py-10 flex flex-wrap items-center justify-center gap-10">
        <div className="__projectCard transition-all ease-in-out duration-300 shadow-[0_0_10px_1px_gray] hover:shadow-[0_0_10px_1px_lightblue] flex flex-col justify-start items-center gap-4 p-4 bg-[#101725] h-[530px] w-80 rounded-xl">
          <div className="__imgContainer h-[50%] w-full rounded-xl">
            <video autoPlay loop muted className="h-full w-full rounded-xl">
              <source src={codeSpaceVideo} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-2">
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              ReactJS
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              Typescript
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              HTML
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              CSS
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              JavaSript
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              NodeJs
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              ExpressJS
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              MongoDB
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              TailwindCSS
            </p>
          </div>
          <div>
            <h1 className="text-zinc-300 mb-2 font-bold text-lg">CodeSpace</h1>
            <p className="text-zinc-400">
            ✨ A user-friendly coding platform for writing, running, saving, and downloading code. 💻 Designed with useful features to enhance productivity and flexibility in coding tasks. 🚀
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 text-sm">
            <a
              target="_blank"
              href="https://codespaceonlinecodingplatform.onrender.com/"
              className="px-4 py-2 bg-[#1f2146] border-2 border-[#480c80] hover:bg-[#161944] hover:scale-105 transition-all ease-in-out duration-300 rounded-lg"
            >
              View WebApp
            </a>
            <a
              target="_blank"
              href="https://github.com/salmanshaikh18/CodeSpace_OnlineCodingPlatform"
              className="px-4 py-2 bg-[#1f2146] border-2 border-[#480c80] hover:bg-[#161944] hover:scale-105 transition-all ease-in-out duration-300 rounded-lg"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className="__projectCard transition-all ease-in-out duration-300 shadow-[0_0_10px_1px_gray] hover:shadow-[0_0_10px_1px_lightblue] flex flex-col justify-start items-center gap-4 p-4 bg-[#101725] h-[530px] w-80 rounded-xl">
          <div className="__imgContainer h-[50%] w-full">
            {/* <img src="" className="h-full w-full rounded-xl" /> */}
            <video autoPlay loop muted className="h-full w-full rounded-xl">
              <source src={movieTimeVideo} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-2">
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              ReactJS
            </p>
            {/* <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              Typescript
            </p> */}
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              HTML
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              CSS
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              JavaSript
            </p>
            {/* <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              NodeJs
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              ExpressJS
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              MongoDB
            </p> */}
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              TailwindCSS
            </p>
          </div>
          <div>
            <h1 className="text-zinc-300 mb-2 font-bold text-lg">MovieTime</h1>
            <p className="text-zinc-400">
              Users can explore all types of movies. Browse by rating,
              popularity, upcoming releases, and genres 🔍 Search for your
              favorite titles 🎥 Watch trailers ⭐ See ratings and top cast 📅
              Check release dates and detailed movie information.
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 text-sm">
            <a
              target="_blank"
              href="https://movie-time-qkx2.onrender.com/"
              className="px-4 py-2 bg-[#1f2146] border-2 border-[#480c80] hover:bg-[#161944] hover:scale-105 transition-all ease-in-out duration-300 rounded-lg"
            >
              View WebApp
            </a>
            <a
              target="_blank"
              href="https://github.com/salmanshaikh18/MovieTime"
              className="px-4 py-2 bg-[#1f2146] border-2 border-[#480c80] hover:bg-[#161944] hover:scale-105 transition-all ease-in-out duration-300 rounded-lg"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className="__projectCard transition-all ease-in-out duration-300 shadow-[0_0_10px_1px_gray] hover:shadow-[0_0_10px_1px_lightblue] flex flex-col justify-start items-center gap-4 p-4 bg-[#101725] h-[530px] w-80 rounded-xl">
          <div className="__imgContainer h-[50%] w-full rounded-xl">
            <video autoPlay loop muted className="h-full w-full rounded-xl">
              <source src={aiAssistantVideo} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-2">
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              ReactJS
            </p>
            {/* <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              Typescript
            </p> */}
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              HTML
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              CSS
            </p>
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              JavaSript
            </p>
            {/* <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              NodeJs
            </p> */}
            {/* <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              ExpressJS
            </p> */}
            {/* <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              MongoDB
            </p> */}
            <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[14px]">
              TailwindCSS
            </p>
          </div>
          <div>
            <h1 className="text-zinc-300 mb-2 font-bold text-lg">
              AI Assistant
            </h1>
            <p className="text-zinc-400">
              A helpful platform ready to answer any question you have. Just
              ask, and it provides quick and accurate responses using artificial
              intelligence 🧠. Your go-to for information and assistance
              anytime, anywhere! 🌐
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 text-sm">
            <a
              target="_blank"
              href="https://aiassistant-fv3x.onrender.com/"
              className="px-4 py-2 bg-[#1f2146] border-2 border-[#480c80] hover:bg-[#161944] hover:scale-105 transition-all ease-in-out duration-300 rounded-lg"
            >
              View WebApp
            </a>
            <a
              href="https://github.com/salmanshaikh18/AiAssistant"
              className="px-4 py-2 bg-[#1f2146] border-2 border-[#480c80] hover:bg-[#161944] hover:scale-105 transition-all ease-in-out duration-300 rounded-lg"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
