import { FC } from "react"
import PlayButton from "../PlayButton"
import {
    StyledLabel,
    StyledTitle,
    StyledGenericContainer,
    StyledParagraph,
    StyledContentWrapper,
} from "./index.styles"

interface GenericContentProps {
    readonly label: JSX.Element
    readonly title: JSX.Element
    readonly paragraph: JSX.Element
    readonly showLabelAccents?: boolean
    readonly ytEmbedSrc?: string
    readonly children?: JSX.Element
}

const GenericContent: FC<GenericContentProps> = ({
    label,
    title,
    paragraph,
    showLabelAccents,
    ytEmbedSrc,
    children,
}) => (
    <StyledContentWrapper>
        <div className="top-group">
            <StyledGenericContainer>
                <StyledLabel showAccents={showLabelAccents}>{label}</StyledLabel>
                <StyledTitle>{title}</StyledTitle>
                <StyledParagraph>{paragraph}</StyledParagraph>
            </StyledGenericContainer>
            {ytEmbedSrc && <PlayButton ytEmbedSrc={ytEmbedSrc} />}
        </div>
        <div className="bottom-group">{children}</div>
    </StyledContentWrapper>
)

export default GenericContent
