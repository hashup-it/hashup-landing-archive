import { FC } from "react"
import InfoBox from "./InfoBox"
import { ColoredText } from "../Shared"
import { SectionHeader, SectionLabel } from "../Shared/sections.styles"
import {
    StyledRoadmap,
    StyledSlider,
    StyledBoxesArea,
    StyledSliderControls,
    StyledSliderControl,
} from "./roadmap.styles"
import { infoBoxesData, highlightedId } from "./data"
import useSlider from "./logic"

interface SliderControlsProps {
    readonly numberOfBoxes: number
    readonly selectedSlideId: number
    readonly jumpToSlide: (id: number) => void
}
const SliderControls: FC<SliderControlsProps> = ({
    numberOfBoxes,
    jumpToSlide,
    selectedSlideId,
}) => (
    <StyledSliderControls>
        {Array.from({ length: numberOfBoxes }, (_, k) => (
            <StyledSliderControl
                key={k}
                selected={selectedSlideId === k}
                onClick={() => jumpToSlide(k)}
            />
        ))}
    </StyledSliderControls>
)

const Slider = () => {
    const {
        sliderRef,
        sliderChildRef,
        isGrabbed,
        jumpToSlide,
        selectedSlideId,
        onSliderMouseDown,
        onSliderMouseUp,
        numberOfSlides
    } = useSlider()

    return (
        <>
            <StyledSlider
                ref={sliderRef}
                isGrabbed={isGrabbed}
                onMouseDown={onSliderMouseDown}
                onMouseUp={onSliderMouseUp}
            >
                <StyledBoxesArea ref={sliderChildRef}>
                    {infoBoxesData.map((item, index) => (
                        <InfoBox key={item.label} highlighted={index === highlightedId} {...item} />
                    ))}
                </StyledBoxesArea>
            </StyledSlider>
            <SliderControls
                numberOfBoxes={numberOfSlides}
                jumpToSlide={jumpToSlide}
                selectedSlideId={selectedSlideId}
            />
        </>
    )
}

export const Roadmap = () => (
    <StyledRoadmap>
        <SectionLabel>
            <ColoredText>roadmap</ColoredText>
        </SectionLabel>
        <SectionHeader>
            So, how are we <ColoredText>going to do all of this?</ColoredText>
        </SectionHeader>
        <Slider />
    </StyledRoadmap>
)
