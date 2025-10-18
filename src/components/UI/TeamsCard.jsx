import React from "react";

function TeamsCard({ teamsImage, Name, Job }) {
  return (
    <div className="my-16 border border-transparent shadow-lg bg-white rounded-3xl p-3 flex flex-col items-center justify-center mx-auto w-full max-w-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="w-full h-80 object-cover">
        <img
          src={teamsImage}
          alt="teams"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mt-4">{Name}</h1>
        <p className="text-gray-600 mb-2">{Job}</p>
      </div>
    </div>
  );
}

export default TeamsCard;
