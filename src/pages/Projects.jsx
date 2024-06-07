import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p>
        In my 2 years as a Front-End Developer, I have had the opportunity to
        work on a variety of projects that showcase my skills in React, HTML,
        CSS,Tailwind, API integration, testing, and deployment. Below are some
        highlighted projects that demonstrate my ability to create dynamic and
        responsive web applications, as well as my commitment to delivering
        high-quality and efficient solutions.
      </p>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => {
          return (
            <div className="lg:w-[400px] w-full" key={index}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="project"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div>
                <h4 className="mt-5 flex flex-col">
                  <h4 className="text-2xl font-poppins font-semibold">
                    {project.name}
                  </h4>
                  <p className="mt-2 text-slate-500">{project.decription}</p>
                  <div className="mt-5 flex items-center gap-2 font-poppins">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      Live Link
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
