import React, { useEffect } from "react";
import kartik from "../images/kartik2.png";
import { Bio } from "../utils/constants";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      // You can add custom options here if needed
      duration: 2000,
    });
  }, []);

  return (
    <div id="about">
      <div className="flex justify-evenly items-center mt-10 sm:p-8 p-4 bg-[#1F363D] text-white font-poppins">
        <div className="flex sm:flex-row flex-col lg:w-11/12 xl:items-center justify-between gap-16 xl:gap-0">
          <div
            className="flex flex-col gap-10 sm:max-w-xl w-full items-start"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-[1000] font-poppins">
              Hello! I'm {Bio.name},<br />{" "}
              <span className="text-yellow-300">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="text-xs text-[#B3BAC5]">
              a recent graduate thrilled to kickstart my career as a front-end
              developer. Join me on this coding adventure, where curiosity meets
              creativity, and together, we'll craft engaging user interfaces
              that leave a lasting impact.
            </p>
            <div>
              <p className="font-light text-lg">Connect with me</p>
              <div className="flex flex-row gap-4 text-3xl mt-3 cursor-pointer">
                <a
                  className="hover:text-yellow-300"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Kartik9082"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                  </svg>
                </a>
                <a
                  className="hover:text-yellow-300"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/kartikay-5a45b4197/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-end">
              <img src={kartik} className="h-[250px] rounded-full w-auto sm:bg-primaryBg sm:rounded-none " alt="user" />
            </div>
          </div>
          <div className="max-w-sm" data-aos="fade-down">
            <a href="/about" previewlistner="true">
              <div className="flex flex-col gap-2 xl:py-6 pb-6 border-b-2 border-gray border-[#282E37]">
                <p className="font-bold">About me</p>
                <p className="text-[11px] text-[#B3BAC5]">Here, Join my journey as a fresh tech enthusiast, navigating challenges with enthusiasm and a fresh perspective. Passionate about innovation and problem-solving, I eagerly embrace opportunities for growth, ready to make my mark with curiosity and adaptability.</p>
                <button className="flex flex-row items-center mt-2 gap-2 w-fit font-light border-b py-1 border-lightGrayText hover:text-yellow-400 hover:border-yellow-300 text-[14px]">
                  more About Me 
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z">

                    </path>
                    </svg> </button>
              </div>
            </a>
            <a>
            <div className="flex flex-col gap-2 xl:py-6 py-6 border-b-2 border-[#282E37]">
                <p className="font-bold">projects</p>
                <p className="text-[11px] text-[#B3BAC5]">In my journey, I've created exciting frontend projects that showcase creativity, innovation, and dedication. From responsive designs to interactive interfaces, I've honed my skills and explored new horizons. These projects reflect my passion for crafting engaging user experiences in the digital realm</p>
                <button className="flex flex-row items-center mt-2 gap-2 w-fit font-light border-b py-1 border-lightGrayText hover:text-yellow-400 hover:border-yellow-300 text-[14px]">see my work<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg> </button>
              </div>
            </a>
            <a></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
