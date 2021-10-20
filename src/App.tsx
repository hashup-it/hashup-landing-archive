import React from 'react';
import { LandingContainer } from './App.styles';
import { AboutUs } from './components/AboutUs';
import { Calculator } from './components/Calculator';
import Comparison from './components/Comparison';
import { StyledComparison } from './components/Comparison/index.styles';
import { Footer } from './components/Footer';
import { GameCap } from './components/GameCap';
import GameContract from './components/GameContract';
import { LandingHeader } from './components/Header';
import { NavBar } from './components/NavBar';
import { StyledTopLine, TestSpace } from './components/Shared';


export const App = () => {
  return (
    <LandingContainer>
      <NavBar/>
      <LandingHeader/>
      <AboutUs/>
      <Comparison/>
      <StyledTopLine/>
      <Calculator/>
      <TestSpace/>
      <GameContract/>
      <GameCap/>
      <TestSpace/>
      <Footer/>
    </LandingContainer>
  )
}

export default App;
