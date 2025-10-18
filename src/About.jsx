import React from "react";
import SectionAboutPresentation from "./components/UI/SectionAboutPresentation";
import HistorySection from "./components/UI/HistorySection";
import TeamsCard from "./components/UI/TeamsCard";
import ProducersSection from "./components/UI/ProducersSection";
import teamsImage from "./assets/1.jpg";
import teamsImage2 from "./assets/2.jpg";
import teamsImage3 from "./assets/3.jpg";
function About() {
  return (
    <div className="min-h-screen ">
      <SectionAboutPresentation />
      <HistorySection />
      <div className="py-28 bg-white">
        <h1 className="text-center text-5xl font-bold border-b-2 border-green-600/80 pb-4 mx-auto w-fit">
          Notre équipe
        </h1>
        <div className="flex justify-center gap-4">
          <TeamsCard teamsImage={teamsImage} Name="Steve" Job="Chef" />
          <TeamsCard teamsImage={teamsImage2} Name="Patricia" Job="Gérante" />
          <TeamsCard teamsImage={teamsImage3} Name="Jack" Job="Serveuse" />
        </div>
      </div>
      <ProducersSection />
    </div>
  );
}

export default About;
