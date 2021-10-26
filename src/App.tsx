import React, { useState } from 'react'
import { LandingContainer } from './App.styles'
import { AboutUs } from './components/AboutUs'
import { Calculator } from './components/Calculator'
import { Footer } from './components/Footer'
import { GameCap } from './components/GameCap'
import { LandingHeader } from './components/Header'
import { NavBar } from './components/NavBar'
import { Roadmap } from './components/Roadmap'
import { OurPartners } from './components/OurPartners'
import { InfoNotes } from './components/InfoNotes'
import Airdrop from './components/Airdrop'
import GameContract from './components/GameContract'
import { CreateCartridges } from './components/CreateCartridges'
import { GamExplorer } from './components/GamExplorer'
import Comparison from './components/Comparison'
import { GameLibrary } from './components/GameLibrary'
import Web3 from 'web3'

export const App = () => {
    const [shownAccount, setShownAccount] = useState<string | null>(null)

    const handleMetamaskConnection = async () => {
        if ((window as any).ethereum) {

            const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
            setShownAccount(accounts[0])
        }
    }

    return (
        <LandingContainer>
            <NavBar
                handleMetamaskConnection={handleMetamaskConnection}
                shownAccount={shownAccount}
            />
            <LandingHeader />
            <AboutUs />
            <Comparison/>
            <GameLibrary />
            <Airdrop account={shownAccount}/>
            <CreateCartridges />
            <GameCap />
            <GameContract />
            <GamExplorer />
            <InfoNotes />
            <OurPartners />
            <Roadmap />
            <Footer />
        </LandingContainer>
    )
}

export default App
