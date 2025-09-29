import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const techStack = [
    {
      name: "ReactJs",
    },
    {
      name: "JavaScript",
    },
    {
      name: "TailwindCSS",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "C++",
    },
    {
      name: "SQL",
    },
    {
      name: "Git",
    },
    {
      name: "Redux",
    },
    {
      name: "JavaScript",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="w-full flex items-center justify-center p-4 sm:p-10">
        <h1 className="text-3xl sm:text-5xl font-sans">
          My <span className="font-bold">Skills</span>
        </h1>
      </div>
      <div className="mt-10 sm:mt-20 flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-10 px-4 sm:px-25">
        {techStack.map((tech,index)=>(
            <SkillCard key={index} name={tech.name}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;
