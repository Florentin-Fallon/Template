import React from "react";
import { FaMotorcycle, FaLeaf, FaStar, FaHeadset } from "react-icons/fa";

function Promo() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-600/20 to-green-600/20 rounded-2xl border border-transparent shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-16">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaMotorcycle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-light text-black mb-2">
              Livraison Rapide
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaLeaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-light text-black mb-2">
              Ingrédients Frais
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaStar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-light text-black mb-2">
              Qualité Garantie
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaHeadset className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-light text-black mb-2">Support 24/7</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
