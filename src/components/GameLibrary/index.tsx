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
import { Color } from 'three'

export const GameLibrary = () => {
    return (
        <GameLibraryContainer>
 
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>Game <ColoredText>Library</ColoredText></SectionLabel>
                    <SectionHeader>
                        Całkiem nowy <ColoredText>profil gracza</ColoredText>  na <ColoredText>Game</ColoredText>Xplorer. Pochwal się <ColoredText>kolekcją</ColoredText>!
                    </SectionHeader>
                </LeftWrapper>
                <RightWrapper>
                    <NicknameInstructionsHeading>
                        Zarezerwuj swoją unikalną nazwę konta.
                    </NicknameInstructionsHeading>
                    <NicknameInstructionsList>
                        <li>dowolnie dostosuj swój profil gracza</li>
                        <li>chwal się katalogiem gier</li>
                        <li>wymieniaj się grami ze znajomymi</li>
                    </NicknameInstructionsList>
                </RightWrapper>
            </SectionContainer>
        </GameLibraryContainer>
    )
}
