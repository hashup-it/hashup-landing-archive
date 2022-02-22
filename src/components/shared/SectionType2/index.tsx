import { FC } from "react"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import { StyledContentBox, StyledAnchor } from "./index.styles"

interface Props {
    readonly title: JSX.Element | string
    readonly paragraph?: JSX.Element | string
    readonly label?: JSX.Element | string
    readonly children?: JSX.Element
    readonly marginTop?: string
    readonly anchor?: string
}

const SectionType2: FC<Props> = ({ title, paragraph, label, children, anchor, marginTop }) => (
    <StyledSectionWrapper marginTop={marginTop}>
        {anchor && <StyledAnchor id={anchor} />}
        {label && <StyledSectionLabel>{label}</StyledSectionLabel>}
        <StyledSectionTitle>{title}</StyledSectionTitle>
        {paragraph && <StyledSectionParagraph>{paragraph}</StyledSectionParagraph>}
        <StyledContentBox>{children}</StyledContentBox>
    </StyledSectionWrapper>
)

export default SectionType2
