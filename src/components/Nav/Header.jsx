import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/burger.png";
function Header({ logoText }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-4 mt-4 bg-green-600/20 backdrop-blur-md rounded-2xl border border-transparent shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10  flex items-center justify-center">
              <span className="text-gray-800 font-bold text-lg">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </span>
            </div>
            <span className="text-white font-semibold text-xl">
              <Link to="/" className="text-white text-lg">
                {logoText}
              </Link>
            </span>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-white text-lg font-light hover:text-white"
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="text-white text-lg font-light hover:text-white"
            >
              À propos
            </Link>
            <Link
              to="/menu"
              className="text-white text-lg font-light hover:text-white"
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg font-light hover:text-white"
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
