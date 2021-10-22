import { ButtonOutlined, ColoredText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionBottomLeftPhoto, SectionContainer, SectionHeader, SectionLabel, SectionPhoto, SectionText } from "../Shared/sections.styles"
import { GameExplorerContainer, StyledGamExplorer } from './index.styles'

export const GamExplorer = () => {
    return (
        <StyledGamExplorer>
            <GameExplorerContainer>
                <LeftWrapper>
                    <SectionLabel><ColoredText>game</ColoredText>xplorer.io</SectionLabel>
                    <SectionHeader>
                        Spełnienie potrzeb <ColoredText>kolekcjonerów.</ColoredText>
                    </SectionHeader>
                    <SectionText>
                    Gracze uwielbiają dbać o swoje biblioteki. GameXplorer pozwoli im zaprezentować swoje kolekcje w sposób lepszy niż kiedykolwiek.
                   </SectionText>
                   <SectionText>
                   Jako deweloper, będziesz miał możliwość wydania kolekcjonerskiej
 wersji swojej gry, która na pewno wpadnie w oko kolekcjonerów. 
                   </SectionText>
                </LeftWrapper>
            </GameExplorerContainer>
        </StyledGamExplorer>
    )
}
