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
                        {t("gamexplorer-header-meeting")}
                        <ColoredText>{t("gamexplorer-header-collectors")}</ColoredText>
                    </SectionHeader>
                    <SectionText>{t("gamexplorer-text-gamers")}</SectionText>
                    <SectionText>{t("gamexplorer-text-dev")}</SectionText>
                </LeftWrapper>
            </GameExplorerContainer>
        </StyledGamExplorer>
    )
}

export default GamExplorer
