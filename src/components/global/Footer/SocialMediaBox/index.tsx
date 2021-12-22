import { StyledColoredText } from "components/shared/utils.styles"
import { useTranslation } from "react-i18next"
import { footerSocialsData } from "./data"
import {
    StyledSocialIconWrapper,
    StyledSocialMediaBox,
    StyledSocialMediaText,
    StyledSocialsContainer,
} from "./index.styles"

const SocialMediaBox = () => {
    const { t } = useTranslation()

    return (
        <StyledSocialMediaBox>
            <StyledSocialMediaText>
                {t("footer.span")} <StyledColoredText>&nbsp;Social Media</StyledColoredText>
            </StyledSocialMediaText>
            <StyledSocialsContainer>
                {footerSocialsData.map((social, index) => (
                    <StyledSocialIconWrapper href={social.destination} key={index}>
                        <img src={social.icon} />
                    </StyledSocialIconWrapper>
                ))}
            </StyledSocialsContainer>
        </StyledSocialMediaBox>
    )
}

export default SocialMediaBox
