import React from "react";
import backgroundImage from "./assets/fond-menu.jpg";
import MenuSection from "./components/UI/MenuSection";
import MenuSectionR from "./components/UI/MenuSectionR";
import burgerImage from "./assets/burger.png";
import burgerImage2 from "./assets/burger-chicken.png";
function Menu() {
  return (
    <div className="min-h-screen">
      <div
        className="bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">HAMBURGER</h1>
          <p className="text-2xl text-orange-400 font-medium">
            Artisanal fait à la braise
          </p>
        </div>
      </div>
      <MenuSection
        burgerImage={burgerImage}
        name="Burger extra"
        price="19,90€"
        description="Burger avec 2 steaks, cheddar, bacon, oignon, sauce maison"
      />
      <MenuSectionR
        burgerImage={burgerImage2}
        name="Burger chicken"
        price="19,90€"
        description="Burger avec 2 steaks, cheddar, bacon, oignon, sauce maison"
      />
    </div>
  );
}

export default Menu;
