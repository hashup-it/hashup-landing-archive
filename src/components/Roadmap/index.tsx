import InfoBox from "./InfoBox"
import { ColoredText } from "../Shared"
import { SectionHeader, SectionLabel } from "../Shared/sections.styles"
import { StyledRoadmap, StyledCarousele } from "./roadmap.styles"
import { infoBoxesData, highlightedId } from "./data"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

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

export const Roadmap = () => (
    <StyledRoadmap>
        <SectionLabel>
            <ColoredText>Roadmapa</ColoredText>
        </SectionLabel>
        <SectionHeader>
            Zobacz, <ColoredText>kiedy zamierzamy to wszystko zrobić</ColoredText>
        </SectionHeader>
        <Carousele />
    </StyledRoadmap>
)
