import React from "react";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import backgroundImage from "../../assets/fond.jpg";
function LandingPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 bg-cover bg-center bg-no-repeat flex items-center justify-center pt-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="text-left">
            <h1 className="text-4xl font-light text-white mb-6">
              Bienvenue à la <br />
              <span className="text-7xl text-green-600/80 font-bold">
                {" "}
                Maison Burger
              </span>
            </h1>

            <p className="text-xl text-white mb-8 leading-relaxed">
              Découvrez l’univers du burger fait maison. Des recettes
              généreuses, des produits frais et une ambiance conviviale — tout
              ce qu’il faut pour vous donner faim.
            </p>

            <div className="flex gap-4">
              <Link to="/contact">
                <button
                  as={Link}
                  to="/contact"
                  className="bg-green-600/50 text-white text-lg px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                >
                  Nous contacter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
