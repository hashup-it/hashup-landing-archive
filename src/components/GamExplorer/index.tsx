import { ColoredText } from "../Shared"
import { LeftWrapper, SectionHeader, SectionLabel, SectionText } from "../Shared/sections.styles"
import { GameExplorerContainer, StyledGamExplorer } from "./index.styles"
import { useTranslation } from "react-i18next"

const GamExplorer = () => {
    const { t } = useTranslation()

    return (
        <StyledGamExplorer>
            <GameExplorerContainer>
                <LeftWrapper>
                    <SectionLabel>
                        <ColoredText>game</ColoredText>xplorer.io
                    </SectionLabel>
                    <SectionHeader>
                        {t("gamexplorer-header1")}
                        <ColoredText>{t("gamexplorer-header2")}</ColoredText>
                    </SectionHeader>
                    <SectionText>{t("gamexplorer-text1")}</SectionText>
                    <SectionText>{t("gamexplorer-text2")}</SectionText>
                </LeftWrapper>
            </GameExplorerContainer>
        </StyledGamExplorer>
    )
}

export default GamExplorer
