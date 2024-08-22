import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="h-[60px] z-50 fixed top-0 right-0 px-4 sm:-px-5 lg:px-20 left-0 bg-slate-900 flex justify-center items-center">
      <nav className="flex justify-between w-full items-center font-medium">
        <div className="__logo">
          <h1 className="font-bold text-[blueviolet] relative z-50 text-lg cursor-pointer">
            Portfolio
          </h1>
        </div>
        <ul className="sm:flex text-[#7C73E6] hidden justify-center items-center lg:gap-8 gap-4">
          <li className="transition-all ease-in-out duration-300 hover:underline hover:text-purple-500">
            <a href="#about">About</a>
          </li>
          <li className="transition-all ease-in-out duration-300 hover:underline hover:text-purple-500">
            <a href="#skills">Skills</a>
          </li>
          <li className="transition-all ease-in-out duration-300 hover:underline hover:text-purple-500">
            <a href="#projects">Projects</a>
          </li>
          <li className="transition-all ease-in-out duration-300 hover:underline hover:text-purple-500">
            <a href="#certification">Certification</a>
          </li>
          <li className="transition-all ease-in-out duration-300 hover:underline hover:text-purple-500">
            <a href="#education">Education</a>
          </li>
          <li className="transition-all ease-in-out duration-300 hover:underline hover:text-purple-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="md:flex hidden justify-center items-center">
          <a
            target="_blank"
            href="https://github.com/salmanshaikh18"
            className="text-[blueviolet] cursor-pointer border-[1px] border-[blueviolet] px-4 py-2 rounded-full"
          >
            GitHub Profile
          </a>
        </div>
        <div className="sm:hidden flex justify-center items-center gap-10">
          {/* <a
            target="_blank"
            href="https://github.com/salmanshaikh18"
            className="text-[blueviolet] text-center cursor-pointer border-[1px] border-[blueviolet] px-4 py-2 rounded-full"
          >
            GitHub Profile
          </a> */}
          <div>
            {!showMenu ? (
              <FiMenu
                onClick={() => setShowMenu((prev) => !prev)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <MdClose
                onClick={() => setShowMenu((prev) => !prev)}
                className="text-2xl cursor-pointer fixed top-[18px] right-4"
              />
            )}
          </div>
          {showMenu && (
            <div className="bg-slate-950/90 rounded-b-md absolute top-[60px] right-0 h-[350px] w-screen">
              <nav className="flex justify-center items-center h-full">
                <ul className="flex flex-col justify-center items-center gap-4 text-lg">
                  <li>
                    <a
                      onClick={() => setShowMenu((prev) => !prev)}
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setShowMenu((prev) => !prev)}
                      href="#skills"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setShowMenu((prev) => !prev)}
                      href="#projects"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setShowMenu((prev) => !prev)}
                      href="#certification"
                    >
                      Certification
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setShowMenu((prev) => !prev)}
                      href="#education"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setShowMenu((prev) => !prev)}
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      onClick={() => setShowMenu((prev) => !prev)}
                      href="https://github.com/salmanshaikh18"
                      className="text-[blueviolet] cursor-pointer border-[1px] border-[blueviolet] px-4 py-2 rounded-full"
                    >
                      GitHub Profile
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
