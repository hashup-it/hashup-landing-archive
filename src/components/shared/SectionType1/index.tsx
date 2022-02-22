import { FC } from "react"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
} from "components/shared/section.styles"
import { StyledSectionWrapper, StyledAnchor, StyledBackgroundImgWrapper } from "./index.styles"
import Image from "next/image"
import { DeviceWidth } from "__styles__/consts"

interface Props {
    readonly anchor: string
    readonly title: JSX.Element | string
    readonly paragraph: JSX.Element | string
    readonly imagesBox: JSX.Element
    readonly label?: JSX.Element | string
    readonly button?: JSX.Element
    readonly bgImg?: {
        readonly src: string
        readonly alt: string
    }
}

const SectionType1: FC<Props> = ({
    anchor,
    label,
    title,
    paragraph,
    button,
    imagesBox,
    bgImg,
}) => (
    <StyledSectionWrapper>
        <StyledAnchor id={anchor} />
        <div className="first">
            <div className="content">
                {label && <StyledSectionLabel>{label}</StyledSectionLabel>}
                <StyledSectionTitle>{title}</StyledSectionTitle>
                <StyledSectionParagraph>{paragraph}</StyledSectionParagraph>
                {button}
            </div>
        </div>
        <div className="second">{imagesBox}</div>
        {bgImg && (
            <StyledBackgroundImgWrapper>
                <Image
                    src={bgImg.src}
                    alt={bgImg.alt}
                    quality={40}
                    sizes={`(min-width: ${DeviceWidth.desktop}) 1900px, (max-width: ${DeviceWidth.tablet}) 1000px`}
                    loading="lazy"
                    placeholder="blur"
                    lazyBoundary="400px"
                />
            </StyledBackgroundImgWrapper>
        )}
    </StyledSectionWrapper>
)

export default SectionType1
