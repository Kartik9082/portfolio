import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const SkilItem = ({ image, name }) => {
  useEffect(() => {
    AOS.init({
      // You can add custom options here if needed
      duration: 2000,
    });
  }, []);
  return (
    <div
      className="flex flex-col sm:gap-6 gap-2 items-center justify-center bg-[#1F363D] lg:p-10 sm:p-5 p-3 rounded-md shadow-md bg-opacity-50 hover:text-yellow-300"
      data-aos="flip-up"
    >
      <div className="hover:animate-spin-slow animate-wiggle ">
        <img className="h-12 w-auto" src={image} alt="skillPic" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default SkilItem;
