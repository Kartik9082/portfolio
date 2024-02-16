import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#161B20]">
      <div className="hidden sm:flex justify-center items-center py-10 h-16 w-full text-white">
        <div className="hidden sm:flex justify-center gap-6 ">
            <div className="hover:text-yellow-300 transition delay-200 ease-in-out"><a href="#about">About</a></div>
            <div className="hover:text-yellow-300 transition delay-200 ease-in-out"><a href="#skills">Skills</a></div>
            <div className="hover:text-yellow-300 transition delay-200 ease-in-out"><a href="#projects">Projects</a></div>
            <div className="hover:text-yellow-300 transition delay-200 ease-in-out"><a href="#education">Education</a></div>
            <div className="hover:text-yellow-300 transition delay-200 ease-in-out"><a href="#contact">Contact</a></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
