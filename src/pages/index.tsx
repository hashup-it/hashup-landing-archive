import GameCap from "components/pages/index/GameCap"
import LandingHeader from "components/pages/index/Header"
import Roadmap from "components/pages/index/Roadmap"
import Partners from "components/pages/index/Partners"
import InfoNotes from "components/pages/index/InfoNotes"
import GameContract from "components/pages/index/GameContract"
import Team from "components/pages/index/Team"
import TechStack from "components/pages/index/TechStack"
import Ecosystem from "components/pages/index/Ecosystem"
import Cartridges from "components/pages/index/Cartridges"
import GameWallet from "components/pages/index/GameWallet"
import GameXplorer from "components/pages/index/GameXplorer"
import Airdrop from "components/global/Airdrop"

const LandingPage = () => (
    <>
        <LandingHeader />
        <Ecosystem />
        <Cartridges />
        <GameCap />
        <GameWallet />
        <GameXplorer />
        <GameContract />
        <InfoNotes />
        <Partners />
        <TechStack />
        <Team />
        <Roadmap />
        <Airdrop />
    </>
)

export default LandingPage
