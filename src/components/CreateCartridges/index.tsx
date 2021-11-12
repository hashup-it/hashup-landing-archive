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
import { useTranslation } from "react-i18next"

const CreateCartridges = () => {
    const { t } = useTranslation()
    return (
        <StyledCreateCartridges>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>
                        <ColoredText>CARTRIDGE</ColoredText> on blockchain
                    </SectionLabel>
                    <SectionHeader>
                        {t("crt-crtdg-header-go")}
                        <ColoredText>{t("crt-crtdg-header-enslavement")}</ColoredText>.
                    </SectionHeader>
                    <SectionText>{t("crt-crtdg-text")}</SectionText>
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
}

export default CreateCartridges
