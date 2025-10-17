import React from "react";
import teamsImage from "../../assets/teams.jpg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div
      className="my-24 py-56 mx-28 bg-gradient-to-r rounded-2xl border border-transparent shadow-lg bg-cover bg-center bg-no-repeat opacity-80 hover:opacity-100 transition-opacity duration-300"
      style={{
        backgroundImage: `url(${teamsImage})`,
      }}
    >
      <h1 className="text-5xl font-light text-white mb-6 ml-12">
        Avant tout,
        <br /> une histoire de goût et de partage
      </h1>
      <div className="flex gap-4">
        <Link to="/about">
          <button
            as={Link}
            to="/about"
            className="bg-green-600/50 ml-12 text-white text-lg px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
          >
            Découvrir notre histoire
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutSection;
