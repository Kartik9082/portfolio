import React from "react";
import { Bio } from "../utils/constants";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="about">
      <div className=" bg-[#191924] text-white flex justify-center relative py-80 px-30 md:py-66 md:px-16 sm:py-32 sm:px-16 z-10">
        <div className="relative flex justify-between items-center w-[100%] max-w-[1100px] md:flex-col">
          <div className="w-full order-2 mb-6 flex flex-col items-center md:mb-30 lg:mb-30 md:flex lg:flex">
            <h1>
              Hi, I am <br /> {Bio.name}
            </h1>
            <div>
              I am{" "}
              <span>
                {" "}
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse gap-12 order-2 justify-end md:flex-row md:order-1 md:justify-center md:items-center md:mb-80 lg:mb-80 sm:mb-30">
            <p>lorem50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
