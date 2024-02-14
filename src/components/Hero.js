import React from "react";
import { Bio } from "../utils/constants";
import Typewriter from "typewriter-effect";
import About from "./About";
const Hero = () => {
  return (
    <div>
      <About />
      <h1>Hello i am {Bio.name}</h1>
      <h1 className="flex">
        <span> I am</span>
       {" "}
        <span>
          <Typewriter
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
    </div>
  );
};

export default Hero;
