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
import { assetsUrl } from "config"

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
                        {t("game-cap.header-all")}
                        <ColoredText>{t("game-cap.header-cartridges")}</ColoredText>
                        {t("game-cap.header-place")}
                    </SectionHeader>
                    <SectionText>{t("game-cap.text")}</SectionText>
                </LeftWrapper>
                <RightWrapper>
                    <SectionPhotoSimple src={assetsUrl("section-photos/photo4.png")} />
                </RightWrapper>
            </SectionContainer>
        </StyledGameCap>
    )
}

export default GameCap
