import React from "react";
import { projects, } from "../utils/constants";
import ProjectCard from "./cards/ProjectCard";
import ProjectPageCard from "./cards/ProjectPageCard";

const Projects = () => {
  return (
    <div id="projects" className="font-poppins p-4 sm:p-10 lg:p-16 xl:mx-20">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-3xl mb-10 font-bold border-b-2 py-2">Projects</h1>
        <p className="text-lg font-normal">
          Take a Look at my Latest Projects I've Done
        </p>
      </div>
      <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap gap-5 justify-start sm:justify-center items-center py-0 bg-white">
        {projects.map((item,index) => {
          return (
            <ProjectPageCard
              key={index}
              image={item.image}
              title={item.title}
              date={item.date}
              description={item.description}
              github={item.github}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
