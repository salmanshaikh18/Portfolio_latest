import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="h-[60px] z-50 fixed top-0 right-0 left-0 bg-slate-900 flex justify-center items-center">
      <nav className="flex justify-between w-full px-4 items-center font-medium">
        <div className="__logo">
          <h1 className="font-bold relative z-50 text-lg cursor-pointer">
            Portfolio
          </h1>
        </div>
        <ul className="sm:flex hidden justify-center items-center gap-4">
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
        <div className="sm:flex hidden justify-center items-center">
          <button className="text-[blueviolet] border-[1px] border-[blueviolet] px-4 py-2 rounded-full">
            GitHub Profile
          </button>
        </div>
        <div className="sm:hidden flex justify-center items-center">
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
            <div className="bg-slate-800 rounded-b-md absolute top-[60px] right-0 h-60 w-screen">
              <nav className="flex justify-center items-center h-full">
                <ul className="flex flex-col justify-center items-center gap-3 text-lg">
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
              </nav>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
