import AboutUs from "components/AboutUs"
import GameCap from "components/GameCap"
import LandingHeader from "components/Header"
import Roadmap from "components/Roadmap"
import OurPartners from "components/OurPartners"
import InfoNotes from "components/InfoNotes"
import GameContract from "components/GameContract"
import CreateCartridges from "components/CreateCartridges"
import GamExplorer from "components/GamExplorer"
import Comparison from "components/Comparison"
import GameLibrary from "components/GameLibrary"
import Airdrop from "components/Airdrop"
import Calculator from "components/Calculator"
import Team from "components/Team"

const LandingPage = () => (
        <>
            <LandingHeader />
            <AboutUs />
            <Comparison />
            <Calculator />
            <GameLibrary />
            <Airdrop />
            <CreateCartridges />
            <GameCap />
            <GameContract />
            <GamExplorer />
            <InfoNotes />
            <OurPartners />
            <Team />
            <Roadmap />
        </>
)

export default LandingPage
