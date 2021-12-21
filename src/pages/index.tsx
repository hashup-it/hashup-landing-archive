import GameCap from "components/GameCap"
import LandingHeader from "components/Header"
import Roadmap from "components/Roadmap"
import Partners from "components/Partners"
import InfoNotes from "components/InfoNotes"
import GameContract from "components/GameContract"
import CreateCartridges from "components/CreateCartridges"
import Airdrop from "components/Airdrop"
import Team from "components/Team"
import TechStack from "components/TechStack"
import Ecosystem from "components/Ecosystem"
import Cartridges from "components/Cartridges"
import GameWallet from "components/GameWallet"
import GameXplorer from "components/GameXplorer"

const LandingPage = () => (
    <>
        <LandingHeader />
        <Ecosystem />
        <Cartridges />
        <GameCap />
        <GameWallet />
        <GameXplorer />
        <GameContract />
        <Airdrop />
        <CreateCartridges />
        <GameContract />
        <InfoNotes />
        <Partners />
        <TechStack />
        <Team />
        <Roadmap />
    </>
)

export default LandingPage
