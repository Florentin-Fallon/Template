import React from "react";

function Promo() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className=" items-center grid grid-cols-3 gap-8 w-full justify-center bg-green-600/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
        <div className=" p-6">
          <h1 className="text-4xl font-light text-center mb-2">2025</h1>
          <p className="text-center text-lg text-gray-500">Année de création</p>
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-light text-center mb-2">1</h1>
          <p className="text-center text-lg text-gray-500">Nombre de clients</p>
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-light text-center mb-2">5</h1>
          <p className="text-center text-lg text-gray-500">
            Nombre de produits
          </p>
        </div>
      </div>
    </div>
  );
}

export default Promo;
