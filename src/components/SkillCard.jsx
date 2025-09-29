import React from "react";
import git from "../assets/git.png";
import ElectricBorder from "./ElectricBorder";

const SkillCard = ({ name }) => {
  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <div>
        <div className="h-[200px] w-[200px] flex flex-col items-center justify-between py-10 hover-cards ">
          <img src={git} alt="" className="h-15 w-15" />
          <p className="font-bold font-family-sans">{name}</p>
        </div>
      </div>
    </ElectricBorder>
  );
};

export default SkillCard;
