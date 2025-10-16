import React from "react";
import Header from "./components/Nav/Header";
import LandingPage from "./components/Nav/LandingPage";
import Promo from "./components/UI/Promo";

function Home() {
  return (
    <div>
      <Header logo="F" nomApp="Florentin" />
      <LandingPage />
      <Promo />
    </div>
  );
}

export default Home;
