

import { ColoredText } from "components/Shared";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { footerSocialsData } from "./data";
import { StyledSocialIconWrapper, StyledSocialMediaBox, StyledSocialMediaText, StyledSocialsContainer } from "./index.styles";

const SocialMediaBox = () => {

    const { t } = useTranslation();

    return (
        <StyledSocialMediaBox>
            <StyledSocialMediaText>
                {t("footer.span")} <ColoredText>&nbsp;Social Media</ColoredText>
            </StyledSocialMediaText>
            <StyledSocialsContainer>
                {
                    footerSocialsData.map((social) => 
                        <StyledSocialIconWrapper href={social.destination}>
                            <img src={social.icon}/>
                        </StyledSocialIconWrapper>
                    )
                }
            </StyledSocialsContainer>
        </StyledSocialMediaBox>
    );
}
 
export default SocialMediaBox;