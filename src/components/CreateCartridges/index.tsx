import { ColoredText } from "../Shared"
import {
    LeftWrapper,
    RightWrapper,
    SectionBottomLeftPhoto,
    SectionContainer,
    SectionHeader,
    SectionLabel,
    SectionPhoto,
    SectionText,
    StyledStackingContext,
} from "../Shared/sections.styles"
import { StyledCreateCartridges } from "./index.styles"

const CreateCartridges = () => (
    <StyledCreateCartridges>
        <SectionContainer>
            <LeftWrapper>
                <SectionLabel>
                    <ColoredText>CARTRIDGE</ColoredText> on blockchain
                </SectionLabel>
                <SectionHeader>
                    Wróćmy do czasów przed <ColoredText>zniewoleniem oprogramowania</ColoredText>.
                </SectionHeader>
                <SectionText>
                    Tęsknimy za czasami, gdy kupując licencję na grę faktycznie stawaliśmy się jej
                    właścicielem. Obecny model dystrybucji oprogramowania sprawia, że nabyte przez
                    nas dobra cyfrowe tak naprawdę nie należą do nas. Nie wszystko jednak stracone!
                    HashUp z pomocą cyfrowego cartridge'a pozwoli Ci znowu cieszyć się pełną
                    kontrolą. Handlujcie grami! W końcu są wasze!
                </SectionText>
            </LeftWrapper>
            <RightWrapper>
                <SectionPhoto url="/assets/section-photos/photo1.png">
                    <StyledStackingContext></StyledStackingContext>
                    <SectionBottomLeftPhoto src="/assets/section-photos/photo2.png" />
                </SectionPhoto>
            </RightWrapper>
        </SectionContainer>
    </StyledCreateCartridges>
)

export default CreateCartridges
