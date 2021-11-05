import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import { LandingContainer } from "./App.styles"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import GameCap from "./components/GameCap"
import LandingHeader from "./components/Header"
import NavBar from "./components/NavBar"
import Roadmap from "./components/Roadmap"
import OurPartners from "./components/OurPartners"
import InfoNotes from "./components/InfoNotes"
import GameContract from "./components/GameContract"
import CreateCartridges from "./components/CreateCartridges"
import GamExplorer from "./components/GamExplorer"
import Comparison from "./components/Comparison"
import GameLibrary from "./components/GameLibrary"
import { CartridgesTab } from "./components/CartridgesTab"
import ScrollToTop from "./hook/scrollToTop"
import Airdrop from "components/Airdrop"
import Calculator from "components/Calculator"
import Team from "./components/Team"

const App = () => {
    const [shownAccount, setShownAccount] = useState<string | null>(null)
    const [isWalletSelectorShown, setIsWalletSelectorShown] = useState<boolean>(false)

    const handleMetamaskConnection = async () => {
        const w = window as any

        if (w.ethereum) {
            const accounts = await w.ethereum.request({ method: "eth_requestAccounts" })
            setShownAccount(accounts[0])

            w.ethereum.on("accountsChanged", function (accounts: any) {
                setShownAccount(accounts[0])
            })
        }
    }

    return (
        <LandingContainer>
            <Router>
                <NavBar
                    handleMetamaskConnection={handleMetamaskConnection}
                    shownAccount={shownAccount}
                    isWalletSelectorShown={isWalletSelectorShown}
                    setIsWalletSelectorShown={setIsWalletSelectorShown}
                />
                <ScrollToTop />
                <Switch>
                    <Route exact path="/">
                        <LandingHeader />
                        <AboutUs />
                        <Comparison />
                        <Calculator />
                        <GameLibrary />
                        <Airdrop 
                            account={shownAccount}
                            isWalletSelectorShown={isWalletSelectorShown}
                            setIsWalletSelectorShown={setIsWalletSelectorShown}
                            
                        />
                        <CreateCartridges />
                        <GameCap />
                        <GameContract />
                        <GamExplorer />
                        <InfoNotes />
                        <OurPartners />
                        <Team />
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
