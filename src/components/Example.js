import React, { useState } from "react";
import { Bio } from "../utils/constants";
import { DiCssdeck } from "react-icons/di";

const Navbar = () => {
  const [open, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!open);
  }

  return (
    <div className="sticky max-sm:block flex bg-[#191924] text-white h-auto w-full items-center justify-around">
      <div className="flex">
        <a className="flex " href="#/">
          <DiCssdeck size="3rem" />{" "}
          <span className=" flex items-center">Portfolio</span>
        </a>
      </div>

      <div className="flex items-center">
        <nav className="hidden sm:block">
          <a
            className="m-4 text-base font-semibold hover:text-[#854CE6] cursor-pointer  transition duration-500 ease-in-out"
            href="#about"
          >
            About
          </a>
          <a
            className="m-4 text-base font-semibold hover:text-[#854CE6] cursor-pointer  transition duration-500 ease-in-out"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="m-4 text-base font-semibold hover:text-[#854CE6] cursor-pointer  transition duration-500 ease-in-out"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="m-4 text-base font-semibold hover:text-[#854CE6] cursor-pointer  transition duration-500 ease-in-out"
            href="#education"
          >
            Education
          </a>
        </nav>
      </div>
      <div>
        <button className=" border border-1 border-[#854CE6] border-solid rounded-3xl text-[#854CE6] p-2 px-4 hover:text-white hover:bg-[#854CE6] transition duration-500 ease-in-out">
          <a href={Bio.github} target="_blank">
            Github Profile
          </a>
        </button>
      </div>
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <ul className="sm:hidden flex flex-col m-2 cursor-pointer">
          <li className="m-4 text-base font-semibold hover:text-[#854CE6] cursor-pointer  transition duration-500 ease-in-out">
            <a href="#about"> About</a>{" "}
          </li>
          <li className="m-4 text-base font-semibold hover:text-[#854CE6] cursor-pointer transition duration-500 ease-in-out">
            <a href="#skills"> Skills</a>{" "}
          </li>
          <li className="m-4 text-base font-semibold hover:text-[#854CE6] cursor-pointer transition duration-500 ease-in-out">
            <a href="#projects"> Projects</a>{" "}
          </li>
          <li className="m-4 text-base font-semibold hover:text-[#854CE6] cursor-pointer transition duration-500 ease-in-out">
            <a href="#education"> Education</a>{" "}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
