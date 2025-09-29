import React from "react";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";

import ElectricBorder from "./ElectricBorder";
import pro3 from "../assets/pro3.png";

const Projects = () => {
  return (
    <div className="bg-black py-5 px-25 text-white font-family-sans">
      <h1 className="font-family-sans text-5xl text-center">
        My <span className="font-bold">Projects</span>
      </h1>
      <div className="project-sec">
        <img src={pro1} alt="" className="h-80 w-100" />
        <div className="ml-25 py-5">
          <h2 className="text-3xl font-bold mb-3">01</h2>
          <h3 className="text-2xl font-semibold mb-3">Foodie Buddy</h3>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ratione voluptas magnam in eaque, error odit, at quis, cumque dolore
            ipsa temporibus rem quos delectus ad! Repellendus quos laboriosam
            assumenda. Odit dignissimos suscipit expedita ipsa? Accusamus, vel.
            Quae accusamus repudiandae consequuntur fugiat, assumenda aliquam
            commodi atque cupiditate. Dolorum aliquid, deserunt fugiat explicabo
            est quisquam ipsum officiis dignissimos culpa fugit suscipit?
          </p>
        </div>
      </div>
      <div className="project-sec">
        <div className="py-5 mr-25">
          <h2 className="text-3xl font-bold mb-3">02</h2>
          <h3 className="text-2xl font-semibold mb-3">Netflix-gpt</h3>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ratione voluptas magnam in eaque, error odit, at quis, cumque dolore
            ipsa temporibus rem quos delectus ad! Repellendus quos laboriosam
            assumenda. Odit dignissimos suscipit expedita ipsa? Accusamus, vel.
            Quae accusamus repudiandae consequuntur fugiat, assumenda aliquam
            commodi atque cupiditate. Dolorum aliquid, deserunt fugiat explicabo
            est quisquam ipsum officiis dignissimos culpa fugit suscipit?
          </p>
        </div>
        <img src={pro2} alt="" className="h-80 w-100" />
      </div>
      <div className="project-sec">
        <img src={pro3} alt="" className="h-80 w-100" />
        <div className="ml-25 py-5">
          <h2 className="text-3xl font-bold mb-3">03</h2>
          <h3 className="text-2xl font-semibold mb-3">Resume Analyser</h3>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ratione voluptas magnam in eaque, error odit, at quis, cumque dolore
            ipsa temporibus rem quos delectus ad! Repellendus quos laboriosam
            assumenda. Odit dignissimos suscipit expedita ipsa? Accusamus, vel.
            Quae accusamus repudiandae consequuntur fugiat, assumenda aliquam
            commodi atque cupiditate. Dolorum aliquid, deserunt fugiat explicabo
            est quisquam ipsum officiis dignissimos culpa fugit suscipit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
