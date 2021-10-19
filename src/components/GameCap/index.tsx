import { ButtonOutlined, ColoredText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionContainer, SectionHeader, SectionLabel, SectionText } from "../Shared/sections.styles"
import { StyledGameCap } from "./index.styles"

export const GameCap = () => {
    return (
        <StyledGameCap>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>FREE MARKET SOFTWARE</SectionLabel>
                    <SectionHeader>
                        <ColoredText>GameCap</ColoredText>.io - place that lists all free-market software<ColoredText>.</ColoredText>
                    </SectionHeader>
                    <SectionText>
                    A free software market is a natural consequence of putting software in the hands of players. Trade in Games! A free software market will discover the true price of software.
                    </SectionText>
                    <ButtonOutlined>Go to gamecap.io</ButtonOutlined>
                </LeftWrapper>
                <RightWrapper>
                   
                </RightWrapper>
            </SectionContainer>
        </StyledGameCap>
    )
}