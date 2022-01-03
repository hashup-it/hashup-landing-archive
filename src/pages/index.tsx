import Airdrop from "components/global/Airdrop"
import Roadmap from "components/pages/index/Roadmap"
import Team from "components/pages/index/Team"
import LandingHeader from "components/pages/index/Header"
import Partners from "components/pages/index/Partners"
import TechStack from "components/pages/index/TechStack"
import InfoNotes from "components/pages/index/InfoNotes"
import Ecosystem from "components/pages/index/Ecosystem"
import GameCap from "components/pages/index/GameCap"
import GameContract from "components/pages/index/GameContract"
import Cartridges from "components/pages/index/Cartridges"
import GameWallet from "components/pages/index/GameWallet"
import GameXplorer from "components/pages/index/GameXplorer"

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
