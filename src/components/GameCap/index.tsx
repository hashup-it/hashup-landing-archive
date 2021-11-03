import { ColoredText } from "../Shared"
import {
    LeftWrapper,
    RightWrapper,
    SectionContainer,
    SectionHeader,
    SectionLabel,
    SectionPhotoSimple,
    SectionText,
} from "../Shared/sections.styles"
import { StyledGameCap } from "./index.styles"

const GameCap = () => (
    <StyledGameCap>
        <SectionContainer>
            <LeftWrapper>
                <SectionLabel>
                    <ColoredText>GAME</ColoredText>Cap.io
                </SectionLabel>
                <SectionHeader>
                    Wszystkie <ColoredText>cartridge</ColoredText> w jednym miejscu.
                </SectionHeader>
                <SectionText>
                    Kupuj oprogramowanie w prosty sposób. Na platformie znajdziesz wszystkie
                    informacje na temat gry, którą chcesz nabyć. Śledź cenę oraz podaż. Obserwuj
                    konkretne projekty. Bądź na bieżąco!
                </SectionText>
            </LeftWrapper>
            <RightWrapper>
                <SectionPhotoSimple src="/assets/section-photos/photo4.png" />
            </RightWrapper>
        </SectionContainer>
    </StyledGameCap>
)

export default GameCap
