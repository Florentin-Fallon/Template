import React from "react";
import { Link } from "react-router-dom";

function Header({ logo, nomApp }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-4 mt-4 bg-green-600/20 backdrop-blur-md rounded-2xl border border-transparent shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600/50 rounded-xl flex items-center justify-center">
              <span className="text-gray-800 font-bold text-lg">
                {logo || "F"}
              </span>
            </div>
            <span className="text-black font-semibold text-xl">
              {nomApp || "Florentin"}
            </span>
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/" className="text-black font-light hover:text-blue-200">
              Home
            </Link>
            <Link
              to="/about"
              className="text-black font-light hover:text-blue-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-black font-light hover:text-blue-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
