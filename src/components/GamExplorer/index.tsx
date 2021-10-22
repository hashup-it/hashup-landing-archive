import { ButtonOutlined, ColoredText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionBottomLeftPhoto, SectionContainer, SectionHeader, SectionLabel, SectionPhoto, SectionText } from "../Shared/sections.styles"
import { StyledGamExplorer} from "./index.styles"

export const GamExplorer = () => {
    return (
        <StyledGamExplorer>
            <SectionContainer>
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
                <RightWrapper>
                    <SectionPhoto url="/assets/section-photos/photo1.png">
                        <SectionBottomLeftPhoto src="/assets/section-photos/photo2.png"/>
                    </SectionPhoto>
                </RightWrapper>
            </SectionContainer>
        </StyledGamExplorer>
    )
}