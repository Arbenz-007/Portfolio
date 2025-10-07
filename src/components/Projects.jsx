import React from "react";
import pro1 from "../assets/pro1.jpeg";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import Particles from "./Particles";
import { TbExternalLink } from "react-icons/tb";

const Projects = () => {
  return (
    <div className="relative bg-black py-5 px-4 sm:px-25 text-white font-family-sans">
      <div className="absolute top-0 left-0 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10 py-5 pointer-events-none">
        <h1 className="font-family-sans text-3xl sm:text-5xl text-center">
          My <span className="font-bold">Projects</span>
        </h1>
        <div className="project-sec">
          <img src={pro1} alt="" className="h-auto rounded-2xl w-full sm:h-80 sm:w-100" />
          <div className="ml-0 sm:ml-25 py-5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">01</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Foodie Buddy
            </h3>
            <p className="text-zinc-500 text-sm sm:text-base">
              A full-featured food delivery platform inspired by Swiggy,
              offering real-time restaurant and menu data through API
              integration. With secure user authentication, responsive layouts,
              and smooth navigation, it delivers a reliable and intuitive
              ordering experience. Built using React, Redux, TailwindCSS, and
              API to balance performance with accessibility.
            </p>
            <a href="https://foodiebuddy-fedbd.web.app/" target="_blank"><TbExternalLink className="link_icon"/></a>
          </div>
        </div>
        <div className="project-sec">
          <div className="py-5 mr-0 sm:mr-25">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">02</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Netflix-gpt
            </h3>
            <p className="text-zinc-500 text-sm sm:text-base">
              A Netflix-inspired web app that combines seamless streaming-like
              UI with AI-powered recommendations. Integrated Firebase
              authentication for secure access and OpenAI GPT to deliver
              personalized movie suggestions. Built with React, TailwindCSS, and
              Redux, it ensures smooth navigation, responsive design, and a
              user-centric viewing experience.
            </p>
            <a href="https://netflixgpt-43bbf.web.app/browse" target="_blank"><TbExternalLink className="link_icon"/></a>
          </div>
          <img src={pro2} alt="" className="h-auto rounded-2xl w-full sm:h-80 sm:w-100" />
        </div>
        <div className="project-sec">
          <img src={pro3} alt="" className="h-auto w-full rounded-2xl sm:h-80 sm:w-100" />
          <div className="ml-0 sm:ml-25 py-5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">03</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Resume Analyser
            </h3>
            <p className="text-zinc-500 text-sm sm:text-base">
              An AI-powered web app that evaluates resumes against job
              descriptions, generating ATS compatibility scores and tailored
              improvement suggestions. Achieved 95% detection accuracy and
              significantly improved interview callback rates for users.
              Developed with React 18, TypeScript, TailwindCSS, React Router v7,
              and Puter.js AI SDK, ensuring intelligence, precision, and a
              polished user experience.
            </p>
            <a href="https://puter.com/app/cv-mind" target="_blank"><TbExternalLink className="link_icon"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
