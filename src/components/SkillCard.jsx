import React from "react";
import git from "../assets/git.png";

import GlareHover from "./GlareHover";

const SkillCard = ({ name ,icon}) => {
  return (
    <GlareHover
      width="200px"      // match your card width
      height="200px"     // match your card height
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
      className="flex flex-col items-center justify-between pointer-events-auto py-8  gap-8 px-15 hover-cards bg-white shadow-md rounded-lg"
    >
      <div>{icon}</div>
      <p className="font-bold font-family-sans">{name}</p>
    </GlareHover>
  );
};

export default SkillCard;
