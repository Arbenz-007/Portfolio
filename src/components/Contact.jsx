import React from "react";
import fb from "../assets/fb.png";
import x from "../assets/x.png";
import discord from "../assets/discord.png";
import reddit from "../assets/reddit.png";
const Contact = () => {
  return (
    <div className="text-black py-15 px-25  flex items-center justify-between font-family-sans">
      <form action="">
        <div className="flex flex-col w-[full]">
          <input
            type="text"
            placeholder="Enter your name"
            className="form-box"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="form-box"
          />
          <input type="text" placeholder="Your website" className="form-box" />
          <textarea
            name="name"
            className="border-2 border-gray-700 mt-3.5 w-full h-56 rounded-xl p-2"
            placeholder="How can i help"
            id=""
          ></textarea>
        </div>
        <div className="flex gap-4 sm:gap-7 pt-6">
          <img src={fb} alt=" click me" className="button-icons" />
          <img src={x} alt=" click me" className="button-icons" />
          <img src={discord} alt=" click me" className="button-icons" />
          <img src={reddit} alt=" click me" className="button-icons" />
          <button className="bg-black text-white font-bold p-2 rounded-[5px]">
            Get in touch
          </button>
        </div>
      </form>
      <div className="w-[50vw]">
        <h1 className="font-family-sans text-5xl font-bold leading-relaxed">
          Crafting ideas <br />
          into <span className="outline-text font-bold">digital</span>{" "}
          experiences.
        </h1>
        <p>
          I thrive on solving complex problems while building elegant, efficient
          solutions. Every project is a balance of precision, design, and
          functionality.
        </p>
      </div>
    </div>
  );
};

export default Contact;
