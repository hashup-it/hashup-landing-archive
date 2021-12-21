import { FC } from "react"
import { StyledSectionLabel, StyledSectionParagraph, StyledSectionTitle } from "__styles__/shared"
import { StyledSectionWrapper, StyledAnchor, StyledBackgroundImg } from "./index.styles"

interface SectionType1Props {
    readonly anchor: string
    readonly label: JSX.Element
    readonly title: JSX.Element
    readonly paragraph: JSX.Element
    readonly button: JSX.Element
    readonly imagesBox: JSX.Element
    readonly bgImgSrc: string
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
        <StyledBackgroundImg src={bgImgSrc} alt="" />
    </StyledSectionWrapper>
)

export default SectionType1
