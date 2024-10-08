import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../assets/profileImg.jpg"
import profileImg1 from "../assets/salman.png"

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col-reverse md:flex-row justify-between items-center relative top-[60px] py-10 md:py-0 text-white min-h-[calc(100vh-60px)] w-full"
    >
      <div className="__leftSection h-full w-full md:w-[65%] flex justify-center flex-col">
        <div className="flex gap-2 flex-col mt-10 md:mt-20">
          <h1 className="text-4xl lg:text-6xl font-bold">Hi, I am</h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#7C73E6]">
            Salman Shaikh
          </h1>
        </div>
        <div className="my-6">
          <h1 className="text-[25px] md:text-4xl font-bold">
            -{" "}
            <span className="text-[#854CE6] text-[25px] md:text-3xl">
              <Typewriter
                words={[
                  "FullStack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "MERN Stack Developer"
                ]}
                loop={0} // number of times to loop through the words it its set to 0 then it will be infinite
                cursor={false}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <div>
          <p className="text-zinc-400 text-[16px] md:text-lg lg:text-xl">
          I’m Salman Shaikh, a Full Stack Web Developer with certifications in Full Stack and Backend Development. I recently completed my BCA degree. Proficient in the MERN Stack. With a year of hands-on experience in various projects, I’m passionate about solving problems, committed to excellence, ready to make impactful contribution and achieve great things.
          </p>
        </div>
        <div className="flex justify-start items-center mt-10">
            <a target="_blank" href="https://drive.google.com/file/d/1tE922vxhVpgX9WH1tWzX7BzT-lAR0T9w/view?usp=sharing" className="bg-[#7616cf] transition-all ease-in-out duration-300 hover:scale-105 hover:bg-[#5909a5] font-medium text-sm md:text-[16px] px-4 py-2 rounded-full">Check Resume</a>
        </div>
      </div>
      <div className="__rightSection flex justify-center lg:justify-end items-center h-full w-full md:w-[35%]">
        <div className="h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80 border-2 border-[blueviolet] rounded-full">
            <img src={profileImg1}  className="h-full w-full rounded-full bg-center bg-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
