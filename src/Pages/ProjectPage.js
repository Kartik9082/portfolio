import React from "react";
import { projects } from "../utils/constants";
import ProjectCard from "../components/cards/ProjectCard";

const ProjectPage = () => {
  return (
    <div className="font-poppins text-white flex flex-row m-2 p-2 ">
      {projects.map((item) => (
        <ProjectCard
          key={item.id}
          image={item.image}
          title={item.title}
          date={item.date}
          description={item.description}
          github={item.github}
          tags={item.tags}
        />
      ))}
    </div>
  );
};

export default ProjectPage;
