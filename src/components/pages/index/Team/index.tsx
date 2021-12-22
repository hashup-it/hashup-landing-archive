import { FC } from "react"
import {
    StyledPeopleContainer,
    StyledSectionContainer,
    StyledCarousel,
    StyledTeamMobileWrapper,
    StyledTeamDesktopWrapper,
} from "./index.style"
import { StyledColoredText } from "components/shared/utils.styles"
import { useTranslation } from "react-i18next"
import { teamItems, advisorsItems } from "./data"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { StyledSmallSectionLabel, StyledSmallSectionTitle } from "components/shared/section.styles"

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
            <StyledSmallSectionTitle>{t("team.team")}</StyledSmallSectionTitle>
            <Carousel items={teamItems} />

            <StyledSmallSectionTitle>{t("team.advisors")}</StyledSmallSectionTitle>
            <Carousel items={advisorsItems} />
        </StyledTeamMobileWrapper>
    )
}

const TeamDesktop = () => {
    // Desktop version of static team boxes
    const { t } = useTranslation()

    return (
        <StyledTeamDesktopWrapper>
            <StyledSmallSectionTitle>{t("team.team")}</StyledSmallSectionTitle>
            <StyledPeopleContainer>{teamItems}</StyledPeopleContainer>

            <StyledSmallSectionTitle>{t("team.advisors")}</StyledSmallSectionTitle>
            <StyledPeopleContainer>{advisorsItems}</StyledPeopleContainer>
        </StyledTeamDesktopWrapper>
    )
}

export const TeamSection = () => {
    const { t } = useTranslation()

    return (
        <StyledSectionContainer>
            <StyledSmallSectionLabel>
                <StyledColoredText>{t("team.ourteam")}</StyledColoredText>
            </StyledSmallSectionLabel>

            <TeamDesktop />
            <TeamMobile />
        </StyledSectionContainer>
    )
}

export default TeamSection
