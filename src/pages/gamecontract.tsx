import Header from "components/pages/gamecontract/Header"
import License from "components/pages/gamecontract/License"
import Settings from "components/pages/gamecontract/Settings"
import Community from "components/shared/Community"
import Faq from "components/shared/Faq"

const GameContract = () => (
    <>
        <Header />
        <License />
        <Settings />
        {/* <Faq localeKey="gamecontract.faq" numberOfItems={4} /> */}
        <Community />
    </>
)

export default GameContract
