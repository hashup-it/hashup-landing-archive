import { FC } from "react"
import {
    StyledPeopleContainer,
    StyledHeader,
    StyledSectionContainer,
    StyledCarousel,
    StyledTeamMobileWrapper,
    StyledTeamDesktopWrapper,
} from "./index.style"
import { SectionLabel } from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import { useTranslation } from "react-i18next"
import { teamItems, advisorsItems } from "./data"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const Carousel: FC<{ readonly items: JSX.Element[] }> = ({ items }) => (
    <StyledCarousel>
        <AliceCarousel
            items={items}
            controlsStrategy="alternate"
            autoWidth
            disableButtonsControls
            disableDotsControls
            mouseTracking
        />
    </StyledCarousel>
)

const TeamMobile = () => {
    // Mobile version of team boxes with carousel (horizontal scrolling)
    const { t } = useTranslation()

    return (
        <StyledTeamMobileWrapper>
            <StyledHeader>{t("team.team")}</StyledHeader>
            <Carousel items={teamItems} />

            <StyledHeader>{t("team.advisors")}</StyledHeader>
            <Carousel items={advisorsItems} />
        </StyledTeamMobileWrapper>
    )
}

const TeamDesktop = () => {
    // Desktop version of static team boxes
    const { t } = useTranslation()

    return (
        <StyledTeamDesktopWrapper>
            <StyledHeader>{t("team.team")}</StyledHeader>
            <StyledPeopleContainer>{teamItems}</StyledPeopleContainer>

            <StyledHeader>{t("team.advisors")}</StyledHeader>
            <StyledPeopleContainer>{advisorsItems}</StyledPeopleContainer>
        </StyledTeamDesktopWrapper>
    )
}

export const TeamSection = () => {
    const { t } = useTranslation()

    return (
        <StyledSectionContainer>
            <SectionLabel>
                <ColoredText>{t("team.ourteam")}</ColoredText>
            </SectionLabel>

            <TeamDesktop />
            <TeamMobile />
        </StyledSectionContainer>
    )
}

export default TeamSection
