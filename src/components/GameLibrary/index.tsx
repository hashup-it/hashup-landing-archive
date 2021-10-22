import React from 'react'
import {
    ContentWrapper,
    GameLibraryContainer,
    GameLibraryHeader,
    NicknameInstructions,
    NicknameInstructionsHeading,
    NicknameInstructionsList,
    RightWrapper
} from './index.styles'
import { LeftWrapper,SectionContainer, SectionHeader, SectionLabel } from '../Shared/sections.styles'
import { BoldText, ColoredText } from '../Shared'

export const GameLibrary = () => {
    return (
        <GameLibraryContainer>
 
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>Game <ColoredText>Library</ColoredText></SectionLabel>
                    <SectionHeader>
                        Your new gamer profile with <ColoredText>Game</ColoredText>Xplorer. Showcase your library.
                    </SectionHeader>
                </LeftWrapper>
                <RightWrapper>
                    <NicknameInstructionsHeading>
                        Claim your <BoldText>unique profile nickname</BoldText> now!
                    </NicknameInstructionsHeading>
                    <NicknameInstructionsList>
                        <li>customise your profile to show your true gaming id</li>
                        <li>showcase your games collection</li>
                        <li>trade games with friends</li>
                    </NicknameInstructionsList>
                </RightWrapper>
            </SectionContainer>
        </GameLibraryContainer>
    )
}
