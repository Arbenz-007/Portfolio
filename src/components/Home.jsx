import React from "react";
import Saly from "../assets/Saly-16.png";
import Header from "./Header";
import Banner from "../assets/Banner.png";
import fb from "../assets/fb.png"
import x from "../assets/x.png"
import discord from "../assets/discord.png"
import reddit from "../assets/reddit.png"

const Home = () => {
  return (
    <>
      <Header />
      <div className="mt-[50px]">
        <div className=" flex justify-between px-25">
          <div className="">
            <h1 className="font-family-sans text-5xl mb-7 leading-relaxed">
              Hello, I'm <span className="font-bold">Rayyan</span>.
              <br />
              <span className="font-bold">Frontend</span>{" "}
              <span className="outline-text font-bold">Developer</span> &{" "}
              <span className="font-bold">Competetive</span>{" "}
              <span className="outline-text font-bold">Programmer</span>
              <br />
              Based in <span className="font-bold">India</span>.
            </h1>
            <p className="font-family-sans text-xl text-gray-600">
              I enjoy building responsive, user-friendly web interfaces with
              modern tools like React and TailwindCSS. Alongside development, I
              practice data structures and algorithms to improve my coding
              skills and strengthen my logical thinking.
            </p>
            <div className="flex gap-7 pt-6">
              <img src={fb} alt=" click me" className="button-icons" />
              <img src={x} alt=" click me" className="button-icons"/>
              <img src={discord} alt=" click me" className="button-icons" />
              <img src={reddit} alt=" click me" className="button-icons" />
            </div>
          </div>
          <div className="">
            <img src={Banner} alt="Banner image" className="w-[105vw]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
