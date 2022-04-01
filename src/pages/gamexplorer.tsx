import Details from "components/pages/gamexplorer/Details"
import Discover from "components/pages/gamexplorer/Discover"
import Follow from "components/pages/gamexplorer/Follow"
import Header from "components/pages/gamexplorer/Header"
import Community from "components/shared/Community"
import Faq from "components/shared/Faq"
import SectionType2 from "components/shared/SectionType2"
import { Trans } from "react-i18next"

const GameXplorer = () => (
    <>
        <Header />
        {/* <Follow /> */}
        {/* <Discover /> */}
        {/* <Details /> */}
        <SectionType2
            title={<Trans i18nKey="gamexplorer.follow.title" />}
            paragraph={<Trans i18nKey="gamexplorer.follow.paragraph" />}
            anchor="how-it-works"
        />
        <SectionType2
            title={<Trans i18nKey="gamexplorer.discover.title" />}
            paragraph={<Trans i18nKey="gamexplorer.discover.paragraph" />}
        />
        <SectionType2
            title={<Trans i18nKey="gamexplorer.details.title" />}
            paragraph={<Trans i18nKey="gamexplorer.details.paragraph" />}
        />
        <Faq localeKey="gamexplorer.faq" numberOfItems={4} />
        <Community />
    </>
)

export default GameXplorer
