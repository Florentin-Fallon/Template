import React from "react";
import backgroundImage from "../../assets/aboutsection.jpg";
function SectionAboutPresentation() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-80 flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center mt-20">
        <h1 className="text-5xl font-bold text-white mb-2">À Propos de Nous</h1>
        <p className="text-lg text-gray-200">Accueil / À Propos</p>
      </div>
    </div>
  );
}

export default SectionAboutPresentation;
