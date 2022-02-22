import InfoBox from "./InfoBox"
import { StyledCarousele } from "./index.styles"
import { highlightedId, infoBoxesData } from "./data"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { Trans } from "react-i18next"
import SectionType2 from "components/shared/SectionType2"

const carouseleItems: JSX.Element[] = infoBoxesData.map((item, index) => (
    <InfoBox key={index} highlighted={index === highlightedId} bullets={item} index={index} />
))

const Carousele = () => (
    <StyledCarousele>
        <AliceCarousel
            items={carouseleItems}
            controlsStrategy="alternate"
            autoWidth
            disableButtonsControls
            mouseTracking
        />
    </StyledCarousele>
)

const Roadmap = () => (
    <SectionType2
        title={<Trans i18nKey="home.roadmap.title" />}
        label={<Trans i18nKey="home.roadmap.label" />}
    >
        <Carousele />
    </SectionType2>
)

export default Roadmap
