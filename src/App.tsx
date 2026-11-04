import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./compnents/navbar/NavBar";
import { Banner } from "./compnents/banner/Banner";
import { Recommendations } from "./compnents/recommendations/Recommendations";
import { Footer } from "./compnents/footer/Footer";
import CareerTimeline from "./compnents/timeline/Timeline";
import { Skills } from "./compnents/skills/Skills";
import Projects from "./compnents/projects/Projects";
import WhatNow from "./compnents/what-now/WhatNow";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <main>
        <Skills />
        <CareerTimeline />
        <Projects />
        <WhatNow />
        <Recommendations />
        <Footer />
      </main>
    </div>
  );
}

export default App;
