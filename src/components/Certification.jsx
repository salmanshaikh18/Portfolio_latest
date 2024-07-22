import React from "react";

const Certification = () => {
  return (
    <div
      id="certification"
      className="min-h-[calc(100vh-60px)] w-full flex flex-col my-10 items-center"
    >
      <h1 className="text-4xl lg:text-5xl mt-12 mb-6 font-bold">
        Certification
      </h1>
      <div className="md:w-1/2 sm:w-[60%] w-[90%] lg:w-[40%]">
        <p className="text-[16px] md:text-lg text-zinc-400 text-center">
          My Certication has been a journey of self-discovery and growth. My
          certification details are as follows.
        </p>
      </div>
      <div className="h-full w-full flex flex-col gap-10 justify-center items-center my-10">
        <div className="__educationCard bg-[#171721] h-[30%] md:w-[60%] w-full mx-2 sm:mx-0 p-4 rounded-xl">
          <div className="flex flex-cols items-center gap-4">
            <div className="sm:h-14 h-12 bg-white">
              <img
                src="https://accounts.pwskills.com/images/PWSkills-main.png"
                className="h-full w-full rounded-full"
                alt=""
              />
            </div>
            <div>
              <p className="text-lg md:text-lg font-bold text-zinc-400">
                PW Skills
              </p>
              <p className="text-zinc-400 text-[16px] md:font-bold">
                Full Stack Web Development
              </p>
              <p className="text-zinc-400 text-sm">2023-2024</p>
            </div>
          </div>
          <h1 className="text-zinc-400 my-4 font-bold flex gap-4 justify-start items-start">
           <div className="text-lg">Skills: </div>
            <div className="flex flex-wrap justify-start font-medium items-center gap-2">
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                ReactJS
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                HTML
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                CSS
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                JavaSript
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                NodeJs
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                ExpressJS
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                MongoDB
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                TailwindCSS
              </p>
            </div>
          </h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="text-zinc-400 text-[15px]">
              I certified in Full Stack Web Development from{" "}
              <span>pwskill.com</span>. This certification highlights my ability
              to create comprehensive web applications.
            </p>
            <a
              target="_blank"
              href="https://pwskills.com/learn/certificate/146f7e60-6177-4d65-a050-780f4931adbe/"
              className="px-4 py-2 transition-all ease-in-out duration-300 hover:bg-[#570b9e] hover:scale-105 bg-[#6615b1] rounded-xl text-[15px]"
            >
              View Certificate
            </a>
          </div>
        </div>
        <div className="__educationCard bg-[#171721] h-[30%] md:w-[60%] w-full mx-2 sm:mx-0 p-4 rounded-xl">
          <div className="flex flex-cols items-center gap-4">
            <div className="sm:h-14 h-12 bg-white">
              <img
                src="https://accounts.pwskills.com/images/PWSkills-main.png"
                className="h-full w-full rounded-full"
                alt=""
              />
            </div>
            <div>
              <p className="text-lg md:text-lg font-bold text-zinc-400">
                PW Skills
              </p>
              <p className="text-zinc-400 text-[16px] md:font-bold">
                Backend Development
              </p>
              <p className="text-zinc-400 text-sm">2024</p>
            </div>
          </div>
          <h1 className="text-zinc-400 my-4 font-bold flex gap-4 justify-start items-start">
           <div className="text-lg">Skills: </div>
            <div className="flex flex-wrap justify-start font-medium items-center gap-2">
            
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                JavaSript
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                NodeJs
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                ExpressJS
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                MongoDB
              </p>
              <p className="text-[#9254FD] bg-[#1D1E3A] py-1 px-2 rounded-full text-[15px]">
                REST APIs
              </p>
            </div>
          </h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="text-zinc-400 text-[15px]">
              I certified in Backend Development from{" "}
              <span>pwskill.com</span>. This certification highlights my ability
              to create comprehensive web applications.
            </p>
            <a
              target="_blank"
              href="https://pwskills.com/learn/certificate/60adc4b8-82ef-444d-94f7-a90164706de2/"
              className="px-4 py-2 transition-all ease-in-out duration-300 hover:bg-[#570b9e] hover:scale-105 bg-[#6615b1] rounded-xl text-[15px]"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
