import React from "react";
import git from "../assets/git.png";
import ElectricBorder from "./ElectricBorder";

const SkillCard = ({ name }) => {
  return (
      <div>
        <div className="h-[200px] w-[200px] flex flex-col items-center justify-between py-10 hover-cards ">
          <img src={git} alt="" className="h-15 w-15" />
          <p className="font-bold font-family-sans">{name}</p>
        </div>
      </div>
    
  );
};

export default SkillCard;
