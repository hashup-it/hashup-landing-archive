import React, { useState } from 'react'
import { LandingContainer } from './App.styles'
import { AboutUs } from './components/AboutUs'
import { Footer } from './components/Footer'
import { GameCap } from './components/GameCap'
import { LandingHeader } from './components/Header'
import { NavBar } from './components/NavBar'
import { Roadmap } from './components/Roadmap'
import { OurPartners } from './components/OurPartners'
import { InfoNotes } from './components/InfoNotes'
import GameContract from './components/GameContract'
import { CreateCartridges } from './components/CreateCartridges'
import { GamExplorer } from './components/GamExplorer'
import Comparison from './components/Comparison'
import { GameLibrary } from './components/GameLibrary'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CartridgesTab } from './components/CartridgesTab'
import ScrollToTop from './hook/scrollToTop'

export const App = () => {
    const [shownAccount, setShownAccount] = useState<string | null>(null)

    const handleMetamaskConnection = async () => {
        if ((window as any).ethereum) {

            const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' })
            setShownAccount(accounts[0])
        }
    }

    return (
        <LandingContainer>
            <Router>
                <NavBar
                    handleMetamaskConnection={handleMetamaskConnection}
                    shownAccount={shownAccount}
                />
                <ScrollToTop />
                <Switch>
                    <Route exact path="/">
                        <LandingHeader />
                        <AboutUs />
                        <Comparison />
                        <GameLibrary />
                        <CreateCartridges />
                        <GameCap />
                        <GameContract />
                        <GamExplorer />
                        <InfoNotes />
                        <OurPartners />
                        <Roadmap />
                    </Route>
                    <Route exact path="/Cartridges">
                        <CartridgesTab />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </LandingContainer>
    )
}

export default App
