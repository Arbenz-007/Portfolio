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
            <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet excepturi et iste obcaecati? Repudiandae ipsum officia similique aperiam corporis sapiente itaque et. Quam iste voluptatum architecto consequatur.
            Cupiditate rem ratione provident ut ducimus labore, possimus doloribus repellat expedita  dolor assumenda incidunt? Beatae blanditiis nemo, id neque possimus voluptatum!
            Possimus amet ut numquam distinctio aut nobis officia libero explicabo est ad rerum nulla reprehenderit, quia molestiae assumenda accusantium earum qui eligendi, magnam modi voluptatum omnis blanditiis maiores. Autem, labore?</p>
            <p className="text-sm sm:text-base">Loexcepturi et iste obcaecati? Repudiandae ipsum officia similique aperiam corporis sapiente itaque et. Quam iste voluptatum architecto consequatur.
            Cupiditate rem ratione provident ut ducimus labore, possimus doloribus repellat expedita assumenda incidunt? Beatae blanditiis nemo, id neque possimus voluptatum!
            Possimus amet ut numquam distinctio aut nobis officia libero explicabo est ad rerum nulla reprehenderit, quia molestiae assumenda accusantium earum qui eligendi, magnam modi voluptatum omnis blanditiis maiores. Autem, labore?</p>
            <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates unde assumenda excepturi et iste obcaecati? Repudiandae ipsum officia similique aperiam corporis sapiente itaque et. Quam iste voluptatum architecto consequatur.
            Cupiditate rem ratione porro eaque voluptate consectetur nulla deleniti eum ullam commodi dolor assumenda incidunt? Beatae blanditiis nemo, id neque possimus voluptatum!
            Possimus amet ut numquam distinctio aut nobis officia libero exp magnam modi voluptatum omnis blanditiis maiores. Autem, labore?</p>
        </div>
    </div>
  );
};

export default About;
