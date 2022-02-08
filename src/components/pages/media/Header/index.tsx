import {
    StyledHeaderWrapper,
    StyledTitle,
    StyledParagraph,
    StyledTextSection,
    StyledImageSection,
} from "./index.styles"
import Image from "next/image"
import { StyledColoredText } from "components/shared/utils.styles"
import { useTranslation } from "react-i18next"

const fankitSvg = require("/public/assets/media/fankit-icon.svg")

const TextSection = () => {
    const { t } = useTranslation()

    return (
        <StyledTextSection>
            <StyledTitle>
                <div className="label">
                    Hash<StyledColoredText>Up</StyledColoredText> media files
                </div>
                <h1 className="title">
                    Media Kit<StyledColoredText>.</StyledColoredText>
                </h1>
            </StyledTitle>
            <StyledParagraph>{t("media.header.paragraph")}</StyledParagraph>
        </StyledTextSection>
    )
}

const ImageSection = () => (
    <StyledImageSection>
        <div className="img-wrapper">
            <Image src={fankitSvg} alt="fankit icon" priority />
        </div>
    </StyledImageSection>
)

const Header = () => (
    <StyledHeaderWrapper>
        <div className="content">
            <TextSection />
            <ImageSection />
        </div>
    </StyledHeaderWrapper>
)

export default Header
