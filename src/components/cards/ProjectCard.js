import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({
  image,
  title,
  date,
  description,
  github,
  tags,
  skills,
}) => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-start m-4 p-6 bg-custom-color" data-aos="zoom-in">
      <div className="flex flex-col items-center m-4 w-full  "data-aos="zoom-in-up" >
        <img className="w-1/2 object-fill" src={image} alt="projectPic" />
      </div>
      <div className="flex justify-between items-center m-1 p-2 w-full">
        <div>
          <h1 className=" text-2xl">{title}</h1>{" "}
        </div>
        <div className="flex justify-end">
          <p className=" text-sm">{date}</p>
        </div>
      </div>
      <div className="flex flex-row m-1 p-1 ">
        <p>{description}</p>
      </div>
      <div className="flex flex-wrap sm:flex-row m-1 p-1 gap-2  items-center">
        {" "}
        Tech stack:
        {tags.map((tag) => (
          <p className="p-1 border-2 rounded-lg cursor-pointer">{tag}</p>
        ))}
      </div>
      <button className="border-b-2 m-4 hover:text-yellow-300 hover:border-yellow-300">
        See Details
      </button>
    </div>
  );
};

export default ProjectCard;
