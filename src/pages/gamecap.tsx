import Header from "components/pages/gamecap/Header"
import Discover from "components/pages/gamecap/Discover"
import Community from "components/shared/Community"
import Faq from "components/shared/Faq"
import SectionType2 from "components/shared/SectionType2"
import { Trans } from "react-i18next"

const GameCap = () => (
    <>
        <Header />
        <SectionType2
            label={<Trans i18nKey="gamecap.follow.label" />}
            title={<Trans i18nKey="gamecap.follow.title" />}
            paragraph={<Trans i18nKey="gamecap.follow.paragraph" />}
            anchor="how-it-works"
        />
        <Discover />
        <SectionType2
            label={<Trans i18nKey="gamecap.visible.label" />}
            title={<Trans i18nKey="gamecap.visible.title" />}
            paragraph={<Trans i18nKey="gamecap.visible.paragraph" />}
        />
        {/* <Faq localeKey="gamecap.faq" numberOfItems={4} /> */}
        <Community />
    </>
)

export default GameCap
