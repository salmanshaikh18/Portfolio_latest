import React from "react";

const Education = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] w-full flex flex-col mt-10 items-center">
      <h1 className="text-4xl lg:text-5xl mt-12 mb-6 font-bold">Education</h1>
      <div className="md:w-1/2 sm:w-[60%] w-[90%] lg:w-[40%]">
        <p className="text-[16px] md:text-lg text-zinc-400 text-center">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>
      <div className="h-full w-full flex justify-center items-center my-10">
        <div className="__educationCard bg-[#171721] h-[30%] md:w-[60%] w-full mx-2 sm:mx-0 p-4 rounded-xl">
            <div className="flex items-center gap-4">
                <div className="sm:h-14 sm:w-14">
                    <img src="https://ycmou.digitaluniversity.ac/Images/Logo.jpg" className="h-full w-full rounded-xl" alt="" />
                </div>
                <div>
                    <p className="text-sm md:text-lg font-bold text-zinc-400">Yashwantrao Chavan Maaharashtra Open University</p>
                    <p className="text-zinc-400 text-sm md:text-[16px] md:font-bold">Bachelors in Computer Application</p>
                    <p className="text-zinc-400 text-sm">2022-2024</p>
                </div>
            </div>
            <h1 className="text-zinc-400 my-4 font-bold">Grade: 7.45</h1>
            <div>
                <p className="text-zinc-400 text-[15px]">I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.</p>
            </div>
        </div>
        <div className="flex flex-col mr-2 sm:mr-0 md:ml-5 gap-1 items-center justify-center">
            <div className="__circle h-4 w-4 border-[2px] border-[blueviolet] rounded-full"></div>
            <div className="__line h-[520px] sm:h-[320px] md:h-[350px] lg:h-[280px] w-[2px] bg-[blueviolet]"></div>
        </div>
      </div>
    </div>
  );
};

export default Education;
