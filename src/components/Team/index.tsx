import { CorePeopleContainer, Header, TeamContainer, TeamPeopleContainer } from "./index.style"
import { Hyperlink, SectionLabel } from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import { Person } from "./Person"
import { SocialIcon } from "../Header/HeaderBottom/index.styles"
import { useTranslation } from "react-i18next"

export const Team = () => {
    const { t } = useTranslation()
    return (
        <TeamContainer>
            <SectionLabel>
                <ColoredText>{t("ourteam")}</ColoredText>
            </SectionLabel>
            <Header>{t("coreteam")}</Header>
            <CorePeopleContainer>
                <Person
                    imageAsset={"/assets/avatars/szymon_jankowski.png"}
                    title="ceo"
                    name="Szymon Jankowski"
                    description={t("szymon-jankowski")}
                    socials={
                        <>
                            <Hyperlink href="https://www.linkedin.com/in/jankowskiszymon/">
                                <SocialIcon src="/assets/icons/linkedin.svg" />
                            </Hyperlink>
                        </>
                    }
                    outline={true}
                />
                <Person
                    imageAsset={"/assets/avatars/filip_szydlowski.png"}
                    title="cfo"
                    name="Filip Szydłowski"
                    description={t("filip-szydlowski")}
                    socials={
                        <>
                            <Hyperlink href="https://www.linkedin.com/in/rafal-bielenia-b87ab935/">
                                <SocialIcon src="/assets/icons/linkedin.svg" />
                            </Hyperlink>
                        </>
                    }
                    outline={true}
                />
                <Person
                    imageAsset={"/assets/avatars/rafal_bielenia.png"}
                    title="tech lead"
                    name="Rafał Bielenia"
                    description={t("rafal-bielenia")}
                    socials={
                        <>
                            <Hyperlink href="https://www.linkedin.com/in/filip-szydlowski/">
                                <SocialIcon src="/assets/icons/linkedin.svg" />
                            </Hyperlink>
                        </>
                    }
                    outline={true}
                />
                <Person
                    imageAsset={"/assets/avatars/cezary_dobrowolski.png"}
                    title="cmo"
                    name="Cezary Dobrowolski"
                    description={t("cezary-dobrowolski")}
                    socials={
                        <>
                            <Hyperlink href="https://www.linkedin.com/in/cezary-krzysztof-dobrowolski-b0a2001a5/">
                                <SocialIcon src="/assets/icons/linkedin.svg" />
                            </Hyperlink>
                        </>
                    }
                    outline={true}
                />
            </CorePeopleContainer>
            <Header>{t("team")}</Header>
            <TeamPeopleContainer>
                <Person
                    imageAsset={"/assets/avatars/tomasz_fiema.png"}
                    title="head of design"
                    name="Tomasz Fiema"
                    socials={
                        <>
                            <Hyperlink href="https://www.linkedin.com/in/tomaszfiema/">
                                <SocialIcon src="/assets/icons/linkedin.svg" />
                            </Hyperlink>
                        </>
                    }
                />
                <Person
                    imageAsset={"/assets/avatars/damian_sarnecki.png"}
                    title="Blockchain Dev"
                    name="Damian Sarnecki"
                    socials={
                        <>
                            <Hyperlink href="https://www.linkedin.com/in/damian-sarnecki/">
                                <SocialIcon src="/assets/icons/linkedin.svg" />
                            </Hyperlink>
                        </>
                    }
                />
                <Person
                    imageAsset={"/assets/avatars/robert_dziubek.png"}
                    title="Blockchain Dev"
                    name="Robert Dziubek"
                    socials={
                        <>
                            <Hyperlink href="https://www.linkedin.com/in/rdziubek">
                                <SocialIcon src="/assets/icons/linkedin.svg" />
                            </Hyperlink>
                        </>
                    }
                />
                <Person
                    imageAsset={"/assets/avatars/jakub_jaworski.png"}
                    title="CMO assistant"
                    name="Jakub Jaworski"
                    socials={
                        <>
                            <Hyperlink href="https://www.linkedin.com/company/hashupit">
                                <SocialIcon src="/assets/icons/linkedin.svg" />
                            </Hyperlink>
                        </>
                    }
                />
            </TeamPeopleContainer>
        </TeamContainer>
    )
}

export default Team
