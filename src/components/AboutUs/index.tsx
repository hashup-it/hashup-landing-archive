import { useEffect } from "react";
import { BoldText, ColoredText, GradientText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionHeader, SectionLabel, SectionText } from "../Shared/sections.styles"
import { AboutCard, BackgroundWorld, CardHeader, CardLine, CardParticles, Cards, RadialGradient, SectionContainer, StyledAboutUs } from "./index.styles"

export const AboutUs = () => {


    return (
        <StyledAboutUs>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>Posiadaj gry</SectionLabel>
                    <SectionHeader>
                        <ColoredText>Wolny</ColoredText> rynek gier i&nbsp;oprogramowania
                    </SectionHeader>
                    <SectionText>
                    Wolny rynek gier jest naturalną konsekwencją oddania w ręce graczy gier które zakupili. Handluj grami! Wolny rynek gier odkryje prawdziwą cenę oprogramowania. 
                    </SectionText>
                </LeftWrapper>
                <RightWrapper>
                    <Cards>
                        <AboutCard>
                            <CardLine/>
                            <CardHeader></CardHeader>
                            Did you know that centrally controlled prices as they are now <BoldText><GradientText>is socialism?</GradientText></BoldText> The game market needs some capitalism.
                        </AboutCard>
                        <AboutCard>
                            <CardParticles/>
                            <CardLine/>
                            <CardHeader>Monopol</CardHeader>
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