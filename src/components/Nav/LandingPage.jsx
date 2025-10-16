import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/test.png";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-gray-600 font-medium">
                Réponse rapide à vos questions
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Bienvenue sur
              <span className="text-green-600/50"> Florentin</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez une expérience unique avec notre application moderne.
              Créée avec React, Vite et Tailwind CSS pour une performance
              optimale.
            </p>

            <div className="flex gap-4">
              <Link to="/contact">
                <button
                  as={Link}
                  to="/contact"
                  className="bg-green-600/50 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Nous contacter
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="">
              <img
                src={logo}
                alt="Florentin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
