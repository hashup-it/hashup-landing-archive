import { ColoredText } from "../Shared"
import { LeftWrapper, SectionHeader, SectionLabel, SectionText } from "../Shared/sections.styles"
import { StyledGameExplorerContainer, StyledGamExplorer } from "./index.styles"
import { useTranslation } from "react-i18next"

const GamExplorer = () => {
    const { t } = useTranslation()

    return (
        <StyledGamExplorer>
            <StyledGameExplorerContainer>
                <LeftWrapper>
                    <SectionLabel>
                        <ColoredText>game</ColoredText>xplorer.io
                    </SectionLabel>
                    <SectionHeader>
                        {t("game-explorer.header-meeting")}
                        <ColoredText>{t("game-explorer.header-collectors")}</ColoredText>
                    </SectionHeader>
                    <SectionText>{t("game-explorer.text-gamers")}</SectionText>
                    <SectionText>{t("game-explorer.text-dev")}</SectionText>
                </LeftWrapper>
            </StyledGameExplorerContainer>
        </StyledGamExplorer>
    )
}

export default GamExplorer
