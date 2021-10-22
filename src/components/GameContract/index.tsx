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
                        Twórz <ColoredText>cartdrige</ColoredText> blockchain i publikuj swoje gry <ColoredText>bez pośredników</ColoredText>.
                    </SectionHeader>
                    <SectionText>
                        Stwórz smart contract przy pomocy intuicyjnego edytora. Ustal metodę dystrybucji, zasady rynku wtórnego oraz połącz cartdrige z oprogramowaniem.                    
                    </SectionText>
                </LeftWrapper>
            </ReversedSectionContainer>
        </StyledGameContract>
    )
}

export default GameContract;