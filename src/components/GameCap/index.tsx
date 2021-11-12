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
import { useTranslation } from "react-i18next"

const GameCap = () => {
    const { t } = useTranslation()
    return (
        <StyledGameCap>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>
                        <ColoredText>GAME</ColoredText>Cap.io
                    </SectionLabel>
                    <SectionHeader>
                        {t("gamecap-header-all")}
                        <ColoredText>{t("gamecap-header-cartridges")}</ColoredText>
                        {t("gamecap-header-place")}
                    </SectionHeader>
                    <SectionText>{t("gamecap-text")}</SectionText>
                </LeftWrapper>
                <RightWrapper>
                    <SectionPhotoSimple src="/assets/section-photos/photo4.png" />
                </RightWrapper>
            </SectionContainer>
        </StyledGameCap>
    )
}

export default GameCap
