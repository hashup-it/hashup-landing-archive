import { StyledPeopleContainer, StyledHeader, StyledSectionContainer } from "./index.style"
import { SectionLabel } from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import { useTranslation } from "react-i18next"
import Person from "./PersonBox"
import { coreTeam, advisors, team } from "./data"
import { RoleEnum } from "./PersonBox/interfaces"

export const Team = () => {
    const { t } = useTranslation()

    return (
        <StyledSectionContainer>
            <SectionLabel>
                <ColoredText>{t("team.ourteam")}</ColoredText>
            </SectionLabel>

            <StyledHeader>{t("team.team")}</StyledHeader>
            <StyledPeopleContainer>
                <>
                    {coreTeam.map((item, index) => (
                        <Person
                            key={index}
                            avatarFilename={item.avatarFilename}
                            name={item.name}
                            localeKey={item.localeKey}
                            socialMedia={item.socialMedia}
                            role={RoleEnum.coreTeam}
                            wordsBeforeNameBreak={item.wordsBeforeNameBreak}
                        />
                    ))}

                    {team.map((item, index) => (
                        <Person
                            key={index}
                            avatarFilename={item.avatarFilename}
                            name={item.name}
                            localeKey={item.localeKey}
                            socialMedia={item.socialMedia}
                            role={RoleEnum.team}
                            wordsBeforeNameBreak={item.wordsBeforeNameBreak}
                        />
                    ))}
                </>
            </StyledPeopleContainer>

            <StyledHeader>{t("team.advisors")}</StyledHeader>
            <StyledPeopleContainer>
                {advisors.map((item, index) => (
                    <Person
                        key={index}
                        avatarFilename={item.avatarFilename}
                        name={item.name}
                        localeKey={item.localeKey}
                        socialMedia={item.socialMedia}
                        role={RoleEnum.advisor}
                        wordsBeforeNameBreak={item.wordsBeforeNameBreak}
                    />
                ))}
            </StyledPeopleContainer>
        </StyledSectionContainer>
    )
}

export default Team
