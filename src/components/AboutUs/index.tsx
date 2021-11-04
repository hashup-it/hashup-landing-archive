import { ColoredText } from "../Shared"
import {
    LeftWrapper,
    RightWrapper,
    SectionHeader,
    SectionLabel,
    SectionText,
} from "../Shared/sections.styles"
import {
    AboutCard,
    BackgroundWorld,
    CardHeader,
    CardLine,
    CardParticles,
    Cards,
    RadialGradient,
    SectionContainer,
    StyledAboutUs,
} from "./index.styles"
import { useTranslation } from "react-i18next"

const AboutUs = () => {
    const { t } = useTranslation()

    return (
        <StyledAboutUs>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>
                        <ColoredText>{t("free-yourself")}</ColoredText>
                    </SectionLabel>
                    <SectionHeader>
                        <ColoredText>{t("about-us-header1")}</ColoredText>
                        {t("about-us-header2")}
                    </SectionHeader>
                    <SectionText>{t("about-us-section-text")}</SectionText>
                </LeftWrapper>
                <RightWrapper>
                    <Cards>
                        <AboutCard>
                            <RadialGradient />
                            <CardLine />
                            <CardHeader>{t("about-us-distribution-header")}</CardHeader>
                            {t("about-us-distribution")}
                        </AboutCard>
                        <AboutCard>
                            <CardParticles />
                            <CardLine />
                            <CardHeader>{t("about-us-provision-header")}</CardHeader>
                            {t("about-us-provision")}{" "}
                        </AboutCard>
                    </Cards>
                </RightWrapper>
            </SectionContainer>
            <BackgroundWorld />
        </StyledAboutUs>
    )
}

export default AboutUs
