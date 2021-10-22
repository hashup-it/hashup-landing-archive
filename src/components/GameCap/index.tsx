import { ButtonOutlined, ColoredText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionBottomLeftPhoto, SectionContainer, SectionHeader, SectionLabel, SectionPhoto, SectionPhotoSimple, SectionText } from "../Shared/sections.styles"
import { StyledGameCap } from "./index.styles"

export const GameCap = () => {
    return (
        <StyledGameCap>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel><ColoredText>GAME</ColoredText>Cap.io</SectionLabel>
                    <SectionHeader>
                    Wszystkie <ColoredText>cartdrige</ColoredText> w jednym miejscu.
                    </SectionHeader>
                    <SectionText>
                    Kupuj oprogramowanie w prosty sposób. Na platformie znajdziesz wszystkie informacje na temat gry, którą chcesz nabyć. Śledź cenę oraz podaż. Obserwuj konkretne projekty. Bądź na bieżąco!
                    </SectionText>
                   
                </LeftWrapper>
                <RightWrapper>
                    <SectionPhotoSimple src="/assets/section-photos/photo4.png"/>
                </RightWrapper>
            </SectionContainer>
        </StyledGameCap>
    )
}
