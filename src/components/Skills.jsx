import React from "react";
import SkillCard from "./SkillCard";
import Particles from "./Particles";
import { SiReact, SiJavascript, SiTailwindcss, SiCss3, SiHtml5, SiRedux, SiCplusplus, SiMysql, SiFirebase } from "react-icons/si";
import { SiGit } from "react-icons/si";


const Skills = () => {
  const techStack = [
  { name: "React", icon: <SiReact className="text-cyan-500 text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600 text-4xl" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600 text-4xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-800 text-4xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-700 text-4xl" /> },
  { name: "Git", icon: <SiGit className="text-red-500 text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
];

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Page content */}
      <div className="relative z-10 pointer-events-none">
        <div className="w-full flex items-center justify-center p-4 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-sans">
            My <span className="font-bold">Skills</span>
          </h1>
        </div>

        <div className="mt-10 sm:mt-20 flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-10 px-4 sm:px-25">
          {techStack.map((tech, index) => (
            <SkillCard key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
