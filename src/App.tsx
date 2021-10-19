import React from 'react';
import { LandingContainer } from './App.styles';
import { LandingHeader } from './components/Header';
import { NavBar } from './components/NavBar';


export const App = () => {
  return (
    <LandingContainer>
      <NavBar/>
      <LandingHeader/>
    </LandingContainer>
  )
}

export default App;
