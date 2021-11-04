import { SectionLabel } from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import {
    ContentContainer,
    OurPartnersContainer,
    OurPartnersHeader,
    QuoteTextContainer,
    SponsorLogo,
    SponsorLogosContainer,
} from "./index.styles"
import { useTranslation } from "react-i18next"

const OurPartners = () => {
    const { t } = useTranslation()

    return (
        <OurPartnersContainer>
            <SectionLabel>{t("partners-label")}</SectionLabel>
            <OurPartnersHeader>
                {t("partners-header1")}
                <ColoredText>{t("partners-header2")}</ColoredText>
            </OurPartnersHeader>
            <ContentContainer>
                <SponsorLogosContainer>
                    <a href="https://tubbly.webflow.io/">
                        <SponsorLogo src="/assets/icons/sponsor/tubbly.png" />
                    </a>
                    <a href="https://www.blockalliance.io/">
                        <SponsorLogo src="/assets/icons/sponsor/blockchain-alliance.png" />
                    </a>
                    <a href="https://unitedideas.co/">
                        <SponsorLogo src="/assets/icons/sponsor/united-ideas.png" />
                    </a>
                </SponsorLogosContainer>
                <QuoteTextContainer>
                    {t("partners-text")}
                    <br />
                    <ColoredText>Hellen Keler</ColoredText>
                </QuoteTextContainer>
            </ContentContainer>
        </OurPartnersContainer>
    )
}

export default OurPartners
