import React from 'react'
import { AdvisorsContainer, CorePeopleContainer, Header, TeamContainer, TeamPeopleContainer } from './index.style'
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
                    description="You are the only publisher. Don't let anyone make money off your hard work."
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                        <Hyperlink href="https://twitter.com/HashUp_it">
                            <SocialIcon src="/assets/icons/twitter.svg" />
                        </Hyperlink>
                    </>}
                    outline={true}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    description="You are the only publisher. Don't let anyone make money off your hard work."
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                    outline={true}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    description="You are the only publisher. Don't let anyone make money off your hard work."
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                    outline={true}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    description="You are the only publisher. Don't let anyone make money off your hard work."
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
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
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
            </TeamPeopleContainer>
            <Header>
                Advisors
            </Header>
            <AdvisorsContainer>
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
                <Person
                    imageAsset={'https://via.placeholder.com/150'}
                    title="cto/cfo"
                    name="Filip Szydłowski"
                    socials={<>
                        <Hyperlink href="https://www.linkedin.com/company/hashupit">
                            <SocialIcon src="/assets/icons/linkedin.svg" />
                        </Hyperlink>
                    </>}
                />
            </AdvisorsContainer>
        </TeamContainer>
    )
}
