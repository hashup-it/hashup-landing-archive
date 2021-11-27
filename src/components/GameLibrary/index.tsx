import {
    GameLibraryContainer,
    NicknameInstructionsHeading,
    NicknameInstructionsList,
    RightWrapper,
} from "./index.styles"
import {
    LeftWrapper,
    SectionContainer,
    SectionHeader,
    SectionLabel,
} from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import { EcosystemHook } from "../CreateCartridges/index.styles"
import { useTranslation } from "react-i18next"

const GameLibrary = () => {
    const { t } = useTranslation()

    return (
        <GameLibraryContainer>
            <SectionContainer>
                <EcosystemHook id="ecosystem" />
                <LeftWrapper>
                    <SectionLabel>
                        Game <ColoredText>Library</ColoredText>
                    </SectionLabel>
                    <SectionHeader>
                        {t("game-library.header-new")}
                        <ColoredText>{t("game-library.header-profile")}</ColoredText>
                        {t("game-library.header-on")}
                        <ColoredText>Game</ColoredText>
                        {t("game-library.header-xplorer")}
                        <ColoredText>{t("game-library.header-collection")}</ColoredText>!
                    </SectionHeader>
                </LeftWrapper>
                <RightWrapper>
                    <NicknameInstructionsHeading>
                        {t("game-library.nick-header")}
                    </NicknameInstructionsHeading>
                    <NicknameInstructionsList>
                        <li>{t("game-library.nick-customize")}</li>
                        <li>{t("game-library.nick-brag")}</li>
                        <li>{t("game-library.nick-swap")}</li>
                    </NicknameInstructionsList>
                    <div id="airdrop" /> {/* Anchor only */}
                </RightWrapper>
            </SectionContainer>
        </GameLibraryContainer>
    )
}

export default GameLibrary
