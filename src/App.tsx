
import React from "react";
import { LandingContainer } from "./App.styles";
import { AboutUs } from "./components/AboutUs";
import { Calculator } from "./components/Calculator";
import Comparison from "./components/Comparison";
import { Footer } from "./components/Footer";
import { GameCap } from "./components/GameCap";
import { LandingHeader } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Roadmap } from "./components/Roadmap";
import { TestSpace } from "./components/Shared";

export const App = () => (
  <LandingContainer>
    <NavBar />
    <LandingHeader />
    <AboutUs />
    <Comparison/>
    <Calculator />
    <TestSpace />
    <GameCap />
    <Roadmap />
    <TestSpace />
    <Footer />
  </LandingContainer>
);

export default App;
