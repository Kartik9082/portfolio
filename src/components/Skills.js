import React from "react";
import { skills } from "../utils/constants";
import SkilItem from "./cards/SkilItem";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center sm:py-16 py-10 sm:gap-10 gap-4 sm:px-0 px-4 font-poppins bg-custom-color"
    >
      <div>
        <h1 className="text-3xl font-bold">Skills</h1>
      </div>
      <div>
        <p className="text-lg font-normal">
          Here are some of my skills on which I have been working on for the
          past 6 Months.
        </p>
      </div>
      <div className="lg:w-11/12 flex flex-row lg:p-6 sm:p-4 p-2 flex-wrap lg:gap-10 sm:gap-4 gap-2 justify-center items-center">
        {skills.map((item) => {
          return <SkilItem key={item.name} image={item.image} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Skills;


