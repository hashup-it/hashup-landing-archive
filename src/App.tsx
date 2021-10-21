
import React from "react"
import { LandingContainer } from "./App.styles"
import { AboutUs } from "./components/AboutUs"
import { Calculator } from "./components/Calculator"
import { Footer } from "./components/Footer"
import { GameCap } from "./components/GameCap"
import { LandingHeader } from "./components/Header"
import { NavBar } from "./components/NavBar"
import { Roadmap } from "./components/Roadmap"
import { TestSpace } from "./components/Shared"
import { OurPartners } from "./components/OurPartners"
import { InfoNotes } from "./components/InfoNotes"
import Airdrop from "./components/Airdrop"
import GameContract from "./components/GameContract"
import { CreateCartridges } from "./components/CreateCartridges"
import { GamExplorer } from "./components/GamExplorer"
import Comparison from "./components/Comparison"

export const App = () => (
    <LandingContainer>
        <NavBar />
        <LandingHeader />
        <AboutUs />
        <Comparison/>
        <Calculator />
        <Airdrop/>
        <CreateCartridges/>
        <GameCap />
        <GameContract/>
        <GamExplorer/>
        <InfoNotes />
        <OurPartners />
        <Roadmap />
        <Footer />
    </LandingContainer>
)

export default App