import React from "react";
import LandingPage from "./components/Nav/LandingPage";
import Promo from "./components/UI/Promo";
import AboutSection from "./components/UI/AboutSection";
import Product from "./components/UI/ProductSection";
function Home() {
  return (
    <div>
      <LandingPage />
      <Promo />
      <AboutSection />
      <Product />
    </div>
  );
}

export default Home;
