import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../assets/profileImg.jpg"

const About = () => {
  return (
    <div
      id="about"
      className="text-2xl flex justify-between items-center px-10 relative top-[60px] text-white h-[calc(100vh-60px)] w-full"
    >
      <div className="__leftSection h-full w-[65%] flex justify-center flex-col">
        <div>
          <h1 className="text-6xl font-bold">Hi, I am</h1>
          <h1 className="text-6xl font-bold text-[#7C73E6]">
            Salman Shaikh
          </h1>
        </div>
        <div className="my-6">
          <h1 className="text-4xl font-bold">
            I am a{" "}
            <span className="text-[#854CE6]">
              <Typewriter
                words={[
                  "FullStack Developer",
                  "Frontend Developer",
                  "Backend Developer",
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
          <p className="text-zinc-400 text-xl">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning, I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
        </div>
      </div>
      <div className="__rightSection flex justify-center items-center h-full w-[35%]">
        <div className="h-80 w-80 border-2 border-[blueviolet] rounded-full bg-red-500">
            <img src={profileImg} className="h-full w-full rounded-full bg-center bg-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
