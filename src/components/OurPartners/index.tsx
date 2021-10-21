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
            <SectionLabel>Who we work with</SectionLabel>
            <OurPartnersHeader>
                Our <ColoredText>Partners</ColoredText>
            </OurPartnersHeader>
            <ContentContainer>
                <SponsorLogosContainer>
                    <SponsorLogo src="/assets/icons/sponsor/uber.svg" />
                    <SponsorLogo src="/assets/icons/sponsor/uber.svg" />
                    <SponsorLogo src="/assets/icons/sponsor/uber.svg" />
                    <SponsorLogo src="/assets/icons/sponsor/uber.svg" />
                    <SponsorLogo src="/assets/icons/sponsor/uber.svg" />
                    <SponsorLogo src="/assets/icons/sponsor/uber.svg" />
                    <SponsorLogo src="/assets/icons/sponsor/uber.svg" />
                </SponsorLogosContainer>
                <QuoteTextContainer>
                    Raised a <ColoredText>$22 milion</ColoredText> extension to its Series B round of funding
                </QuoteTextContainer>
            </ContentContainer>
        </OurPartnersContainer>
    )
}
