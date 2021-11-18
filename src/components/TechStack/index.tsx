import { SectionLabel } from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import {
    ContentContainer,
    StyledTechStackContainer,
    StyledTechStackHeader,
    SponsorLogo,
    StyledLogosContainer,
} from "./index.styles"
import { techStackData } from "./data"
import { useTranslation } from "react-i18next"

const TechStack = () => {
    const { t } = useTranslation()

    return (
        <StyledTechStackContainer>
            <SectionLabel>{t("tech-stack-label")}</SectionLabel>
            <StyledTechStackHeader>
                {t("tech-stack-header-1")}
                <ColoredText> {t("tech-stack-header-2")}</ColoredText>
            </StyledTechStackHeader>
            <ContentContainer>
                <StyledLogosContainer>
                    {techStackData.map((item, index) => (
                        <a
                            href={item.href}
                            className={item.className}
                            title={item.logoAlt}
                            key={index}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SponsorLogo
                                src={`/assets/tech-stack/${item.logoFilename}`}
                                alt={item.logoAlt}
                            />
                        </a>
                    ))}
                </StyledLogosContainer>
            </ContentContainer>
        </StyledTechStackContainer>
    )
}

export default TechStack
