import React from 'react'
import { SectionLabel } from '../Shared/sections.styles'
import { ColoredText } from '../Shared'
import {
    ContentContainer,
    OurPartnersContainer,
    OurPartnersHeader,
    QuoteTextContainer,
    SponsorLogo,
    SponsorLogosContainer
} from './index.styles'

export const OurPartners = () => {
    return (
        <OurPartnersContainer>
            <SectionLabel>Razem zmienimy świat</SectionLabel>
            <OurPartnersHeader>
                Nasi <ColoredText>Partnerzy</ColoredText>
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
                    W pojedynkę możemy zrobić tak mało; razem możemy uczynić tak wiele."<br></br>        
                    <ColoredText>Hellen Keler</ColoredText>

                </QuoteTextContainer>
            </ContentContainer>
        </OurPartnersContainer>
    )
}
