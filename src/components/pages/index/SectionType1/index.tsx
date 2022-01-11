import { FC } from "react"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
} from "components/shared/section.styles"
import { StyledSectionWrapper, StyledAnchor, StyledBackgroundImgWrapper } from "./index.styles"
import Image from "next/image"
import { DeviceWidth } from "__styles__/consts"

interface SectionType1Props {
    readonly anchor: string
    readonly label: JSX.Element
    readonly title: JSX.Element
    readonly paragraph: JSX.Element
    readonly button: JSX.Element
    readonly imagesBox: JSX.Element
    readonly bgImgSrc: string
    readonly bgImgAlt: string
}

const SectionType1: FC<SectionType1Props> = ({
    anchor,
    label,
    title,
    paragraph,
    button,
    imagesBox,
    bgImgSrc,
}) => (
    <StyledSectionWrapper>
        <StyledAnchor id={anchor} />
        <div className="first">
            <StyledSectionLabel>{label}</StyledSectionLabel>
            <StyledSectionTitle>{title}</StyledSectionTitle>
            <StyledSectionParagraph>{paragraph}</StyledSectionParagraph>
            {button}
        </div>
        <div className="second">{imagesBox}</div>
        <StyledBackgroundImgWrapper>
            <Image
                src={bgImgSrc}
                alt={bgImgSrc}
                quality={40}
                sizes={`(min-width: ${DeviceWidth.desktop}) 1900px, (max-width: ${DeviceWidth.tablet}) 1000px`}
                loading="lazy"
                placeholder="blur"
                lazyBoundary="400px"
            />
        </StyledBackgroundImgWrapper>
    </StyledSectionWrapper>
)

export default SectionType1
