import React from "react";

function Card({
  burgerImage,
  Name,
  ingredient,
  ingredient1,
  ingredient2,
  ingredient3,
}) {
  return (
    <div className="border border-transparent shadow-lg bg-white rounded-3xl p-6 flex flex-col items-center justify-center mx-auto w-full max-w-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="w-full h-80 flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={burgerImage}
          alt="burger"
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{Name}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="text-sm text-gray-700 bg-green-100 rounded-full px-3 py-1">
            {ingredient}
          </span>
          <span className="text-sm text-gray-700 bg-green-100 rounded-full px-3 py-1">
            {ingredient1}
          </span>
          <span className="text-sm text-gray-700 bg-green-100 rounded-full px-3 py-1">
            {ingredient2}
          </span>
          <span className="text-sm text-gray-700 bg-green-100 rounded-full px-3 py-1">
            {ingredient3}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
