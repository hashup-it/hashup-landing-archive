import InfoBox from "./InfoBox"
import { ColoredText } from "../Shared"
import { SectionHeader, SectionLabel } from "../Shared/sections.styles"
import { StyledCarousele, StyledRoadmap } from "./roadmap.styles"
import { highlightedId, infoBoxesData } from "./data"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { useTranslation } from "react-i18next"

const carouseleItems: JSX.Element[] = infoBoxesData.map((item, index) => (
    <InfoBox key={index} highlighted={index === highlightedId} {...item} />
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

const Roadmap = () => {
    const { t } = useTranslation()

    return (
        <StyledRoadmap>
            <SectionLabel>
                <ColoredText>{t("roadmap.roadmap")}</ColoredText>
            </SectionLabel>
            <SectionHeader>
                {t("roadmap.header-look")}
                <ColoredText>{t("roadmap.header-when")}</ColoredText>
            </SectionHeader>
            <Carousele />
        </StyledRoadmap>
    )
}

export default Roadmap
