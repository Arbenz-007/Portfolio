import React from "react";
import aboutme from "../assets/aboutme.png";

const About = () => {
  return (
    <div className="min-h-screen w-full py-15 px-4 sm:px-25 flex flex-col sm:flex-row">
      <img src={aboutme} alt="" className="w-full sm:w-auto" />
      <div className="pl-0 sm:pl-20">
        <h1 className="font-family-sans text-3xl sm:text-5xl mb-10">
          About <span className="font-bold">Me</span>
        </h1>
        <p className="text-sm sm:text-base">
          I am a detail-oriented front-end developer with a strong interest in
          creating elegant and efficient digital experiences. My journey in
          technology began with a curiosity for problem solving, which naturally
          grew into building projects that blend creativity with functionality.
          Over time, I have honed my skills in React, JavaScript, TailwindCSS,
          and modern web practices, allowing me to design and develop interfaces
          that are both visually appealing and technically robust.
        </p>
        <br />
        <p className="text-sm sm:text-base">
          In addition to web development, I have a solid foundation in
          programming and data structures & algorithms (DSA). I enjoy tackling
          complex problems and breaking them down into efficient solutions,
          which has sharpened both my analytical thinking and coding style. This
          balance of strong fundamentals and practical implementation helps me
          approach projects with a deeper problem-solving mindset.
        </p>
        <br />
        <p className="text-sm sm:text-base">
          What excites me most about development is the opportunity to take an
          idea from concept to execution — transforming simple wireframes or
          thoughts into polished products that people can interact with. I
          believe in writing clean, maintainable code and following best
          practices that ensure scalability and long-term performance. Outside
          of technical skills, I value collaboration and continuous learning.
          Whether it’s contributing to a team project, exploring emerging
          frameworks, or refining design details, I aim to approach every
          challenge with curiosity and dedication. My goal is to keep improving
          with each project, creating solutions that are not only functional but
          also meaningful for the end user.
        </p>
      </div>
    </div>
  );
};

export default About;
