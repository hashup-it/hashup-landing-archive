import { FC, useState } from "react"
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

interface SliderControlsProps {
    readonly count: number
    readonly selected: number
    readonly select: (id: number) => void
}
const SliderControls: FC<SliderControlsProps> = ({ count, select, selected }) => (
    <StyledSliderControls>
        {Array.from({ length: count }, (_, k) => (
            <StyledSliderControl key={k} selected={selected === k} onClick={() => select(k)} />
        ))}
    </StyledSliderControls>
)

const Slider = () => {
    const [selected, select] = useState(0)

    return (
        <>
            <StyledSlider>
                <StyledBoxesArea selected={selected}>
                    {infoBoxesData.map((item, index) => (
                        <InfoBox key={item.label} highlighted={index === highlightedId} {...item} />
                    ))}
                </StyledBoxesArea>
            </StyledSlider>
            <SliderControls count={infoBoxesData.length - 2} select={select} selected={selected} />
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
