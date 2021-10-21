import React from 'react'
import { LandingContainer } from './App.styles'
import { AboutUs } from './components/AboutUs'
import { Calculator } from './components/Calculator'
import { Footer } from './components/Footer'
import { GameCap } from './components/GameCap'
import { LandingHeader } from './components/Header'
import { NavBar } from './components/NavBar'
import { Roadmap } from './components/Roadmap'
import { TestSpace } from './components/Shared'
import { OurPartners } from './components/OurPartners'

export const App = () => (
    <LandingContainer>
        <NavBar />
        <LandingHeader />
        <AboutUs />
        <Calculator />
        <TestSpace />
        <GameCap />
        <OurPartners />
        <Roadmap />
        <TestSpace />
        <Footer />
    </LandingContainer>
)

export default App
