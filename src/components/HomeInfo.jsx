import React from "react";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <div>
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white">
          Hi, I'm
          <span className="font-semibold mx-2 text-white">MuraliRaj 👋</span>
          <br /> A FrontEnd Developer
        </h1>
      </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          worked with many companies <br /> and picked many skills among way
        </p>
        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn More
          <img src={arrow} alt="arrow" className="w-4 h-4 object-conatin" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Led Multiple Projects to success <br /> and picked many skills among
          way
        </p>
        <Link to="/projects" className="neo-brutalism-white neo-btn">
          visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-conatin" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project or looking for a dev <br /> and picked many skills
          among way
        </p>
        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's Talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-conatin" />
        </Link>
      </div>
    );
  }
  return null;
};

export default HomeInfo;
