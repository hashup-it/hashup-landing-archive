import { FC } from "react"
import { StyledLabel, StyledTitle, StyledContainer, StyledParagraph } from "./index.styles"

interface GenericHeaderTextProps {
    readonly label: JSX.Element
    readonly title: JSX.Element
    readonly paragraph: JSX.Element
    readonly showLabelAccents?: boolean
}

export const GenericHeaderText: FC<GenericHeaderTextProps> = ({
    label,
    title,
    paragraph,
    showLabelAccents,
}) => (
    <StyledContainer>
        <StyledLabel showAccents={showLabelAccents}>{label}</StyledLabel>
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph>{paragraph}</StyledParagraph>
    </StyledContainer>
)
