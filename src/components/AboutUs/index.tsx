import { useEffect } from "react";
import { BoldText, ColoredText, GradientText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionContainer, SectionHeader, SectionLabel, SectionText } from "../Shared/sections.styles"
import { AboutCard, BackgroundWorld, CardHeader, CardLine, CardParticles, Cards, RadialGradient, StyledAboutUs } from "./index.styles"

export const AboutUs = () => {


    return (
        <StyledAboutUs>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>UWOLNIJ SIĘ</SectionLabel>
                    <SectionHeader>
                        <ColoredText>Wolny</ColoredText> rynek oprogramowania
                    </SectionHeader>
                    <SectionText>
                    A free software market is a natural consequence of putting software in the hands of players. Trade in Games! A free software market will discover the true price of software.
                    </SectionText>
                </LeftWrapper>
                <RightWrapper>
                    <Cards>
                        <AboutCard>
                            <CardLine/>
                            <CardHeader>We need capitalism</CardHeader>
                            Did you know that centrally controlled prices as they are now <BoldText><GradientText>is socialism?</GradientText></BoldText> The game market needs some capitalism.
                        </AboutCard>
                        <AboutCard>
                            <CardParticles/>
                            <CardLine/>
                            <CardHeader>Zapiekanki</CardHeader>
                            Did you know that centrally controlled prices as they are now is socialism? The game market needs some capitalism.
                        </AboutCard>
                    </Cards>
                </RightWrapper>
            </SectionContainer>
            <BackgroundWorld/>
            <RadialGradient/>
        </StyledAboutUs>
    )
}