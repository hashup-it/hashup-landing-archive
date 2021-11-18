import { FC } from "react"
import { StyledPeopleContainer, StyledHeader, StyledSectionContainer } from "./index.style"
import { SectionLabel } from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import { useTranslation } from "react-i18next"
import Person from "./PersonBox"
import { coreTeam, advisors, team } from "./data"
import { PersonInterface } from "./PersonBox/interfaces"

interface PeopleProps {
    readonly teamLocale: string
    readonly outline?: boolean
    readonly data: PersonInterface[]
}

const People: FC<PeopleProps> = ({ data, outline, teamLocale }) => {
    const { t } = useTranslation()

    return (
        <>
            <StyledHeader>{t(teamLocale)}</StyledHeader>
            <StyledPeopleContainer>
                {data.map((item, index) => (
                    <Person
                        key={index}
                        avatarFilename={item.avatarFilename}
                        name={item.name}
                        localeKey={item.localeKey}
                        socialMedia={item.socialMedia}
                        outline={outline}
                    />
                ))}
            </StyledPeopleContainer>
        </>
    )
}

export const Team = () => {
    const { t } = useTranslation()
    return (
        <StyledSectionContainer>
            <SectionLabel>
                <ColoredText>{t("ourteam")}</ColoredText>
            </SectionLabel>

            <People data={coreTeam} teamLocale="coreteam" outline />
            <People data={team} teamLocale="team" />
            <People data={advisors} teamLocale="advisors" />
        </StyledSectionContainer>
    )
}

export default Team
