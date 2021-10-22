import { ButtonOutlined, ColoredText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionBottomLeftPhoto, SectionContainer, SectionHeader, SectionLabel, SectionPhoto, SectionPhotoSimple, SectionText } from "../Shared/sections.styles"
import { ReversedSectionContainer, StyledGameContract } from "./index.styles"

const GameContract = () => {
    return (
        <StyledGameContract>
            <ReversedSectionContainer>
                <RightWrapper>
                    <SectionPhotoSimple src="/assets/section-photos/photo3.png">
                       
                    </SectionPhotoSimple>
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
            </ReversedSectionContainer>
        </StyledGameContract>
    )
}

export default GameContract;