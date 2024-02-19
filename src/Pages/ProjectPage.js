import React from "react";
import { projects } from "../utils/constants";
import ProjectCard from "../components/cards/ProjectCard";


const ProjectPage = () => {
  return (
    <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap gap-5 justify-start sm:justify-center items-center py-0 text-white font-poppins ">
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
