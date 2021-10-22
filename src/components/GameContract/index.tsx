import { ButtonOutlined, ColoredText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionBottomLeftPhoto, SectionContainer, SectionHeader, SectionLabel, SectionPhoto, SectionText } from "../Shared/sections.styles"
import { StyledGameContract } from "./index.styles"

const GameContract = () => {
    return (
        <StyledGameContract>
            <SectionContainer>
                <RightWrapper>
                    <SectionPhoto url="/assets/section-photos/photo1.png">
                        <SectionBottomLeftPhoto src="/assets/section-photos/photo2.png"/>
                    </SectionPhoto>
                </RightWrapper>
                <LeftWrapper>
                    <SectionLabel>FREE MARKET SOFTWARE</SectionLabel>
                    <SectionHeader>
                        <ColoredText>GameCap</ColoredText>.io - place that lists all free-market software<ColoredText>.</ColoredText>
                    </SectionHeader>
                    <SectionText>
                    A free software market is a natural consequence of putting software in the hands of players. Trade in Games! A free software market will discover the true price of software.
                    </SectionText>
                    
                </LeftWrapper>
            </SectionContainer>
        </StyledGameContract>
    )
}

export default GameContract;