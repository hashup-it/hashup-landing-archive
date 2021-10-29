import React from 'react'
import { CorePeopleContainer, Header, TeamContainer, TeamPeopleContainer } from './index.style'
import { Hyperlink, SectionLabel } from '../Shared/sections.styles'
import { ColoredText } from '../Shared'
import { Person } from './Person'
import { SocialIcon } from '../Header/HeaderBottom/index.styles'

export const Team = () => {
    return (
        <TeamContainer>
            <SectionLabel>
                <ColoredText>
                    Our team
                </ColoredText>
            </SectionLabel>
            <Header>
                Core Team
            </Header>
            <CorePeopleContainer>
                <Person
                    imageAsset={'/assets/avatars/szymon_jankowski.png'}
                    title="ceo"
                    name="Szymon Jankowski"
                    description="Ekonomista, od młodego wieku widział potencjał w web3.
                    "
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/in/jankowskiszymon/">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                    outline={true}
                />
                <Person
                    imageAsset={'/assets/avatars/filip_szydlowski.png'}
                    title="cfo"
                    name="Filip Szydłowski"
                    description="Prawnik i sympatyk kryptowalut, obyty w pracy w kancelariach i startupach.                    "
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                    outline={true}
                />
                <Person
                    imageAsset={'/assets/avatars/rafal_bielenia.png'}
                    title="tech lead"
                    name="Rafał Bielenia"
                    description="Ma bogate doświadczenie w dziedzinie software'u i algorytmiki, pracował w Google i Microsoft."
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/in/rafal-bielenia-b87ab935/">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                    outline={true}
                />
                <Person
                    imageAsset={'/assets/avatars/cezary_dobrowolski.png'}
                    title="cmo"
                    name="Cezary Dobrowolski"
                    description="Entuzjasta marketingu nadającego wartość. Uwielbia budować relację między klientami a marką."
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/in/jankowskiszymon/">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                    outline={true}
                />
            </CorePeopleContainer>
            <Header>
                Team
            </Header>
            <TeamPeopleContainer>
                <Person
                    imageAsset={'/assets/avatars/tomasz_fiema.png'}
                    title="head of design"
                    name="Tomasz Fiema"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'/assets/avatars/damian_sarnecki.png'}
                    title="Blockchain Dev"
                    name="Damian Sarnecki"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'/assets/avatars/robert_dziubek.png'}
                    title="Blockchain Dev"
                    name="Robert Dziubek"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'/assets/avatars/jakub_jaworski.png'}
                    title="CMO assistant"
                    name="Jakub Jaworski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
            </TeamPeopleContainer>
        </TeamContainer>
    )
}
