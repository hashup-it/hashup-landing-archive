import React from 'react';
import { LandingContainer } from './App.styles';
import { AboutUs } from './components/AboutUs';
import { Calculator } from './components/Calculator';
import { Footer } from './components/Footer';
import { GameCap } from './components/GameCap';
import { LandingHeader } from './components/Header';
import { NavBar } from './components/NavBar';
import { StyledTopLine, TestSpace } from './components/Shared';


export const App = () => {
  return (
    <LandingContainer>
      <NavBar/>
      <LandingHeader/>
      <AboutUs/>
      <StyledTopLine/>
      <Calculator/>
      <TestSpace/>
      <GameCap/>
      <TestSpace/>
      <Footer/>
    </LandingContainer>
  )
}

export default App;
