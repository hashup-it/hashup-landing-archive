import InfoBox from "./InfoBox"
import { StyledColoredText } from "components/shared/utils.styles"
import { StyledCarousele, StyledRoadmap } from "./index.styles"
import { highlightedId, infoBoxesData } from "./data"
import AliceCarousel from "react-alice-carousel"
import { useTranslation } from "react-i18next"
import "react-alice-carousel/lib/alice-carousel.css"
import { StyledSectionLabel, StyledSectionTitle } from "components/shared/section.styles"

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
            <StyledSectionLabel>{t("roadmap.roadmap")}</StyledSectionLabel>
            <StyledSectionTitle>
                {t("roadmap.header-look")}
                <StyledColoredText>{t("roadmap.header-when")}</StyledColoredText>
            </StyledSectionTitle>
            <Carousele />
        </StyledRoadmap>
    )
}

export default Roadmap
