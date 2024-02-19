import Aos from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

const ProjectPageCard = ({image, title, date, description, tags}) => {
    useEffect(() => {
        Aos.init({
          duration: 2000,
        });
      }, []);
      console.log(Aos)
    const maxLength = 100;
  const shortenedDesc =
    description.length > maxLength ? description.slice(0, maxLength - 3) + "..." : description;
  return (
    <div className="flex flex-col bg-custom-color text-white m-2 p-2 rounded-xl w-80 h-2/3 overflow-hidden shadow-2xl transition-all duration-700 hover:scale-95" data-aos="zoom-in-up">
      <img src={image} alt="prjectPic" />
      <div className="flex flex-row justify-between m-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-xs ">{date}</p>
      </div>
      <div className="text-sm text-gray-500">{shortenedDesc}</div>
      <div className="flex m-1 flex-wrap gap-1 items-center">Tech Used :{tags.map((t) => <p className="p-1 border-2 rounded-lg cursor-pointer">{t}</p>)}</div>
      <button className="border-b-2 border-red">Know more</button>
    </div>
  );
};

export default ProjectPageCard;
