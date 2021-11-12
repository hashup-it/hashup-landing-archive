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
                        {t("gamelibrary-header-new")}
                        <ColoredText>{t("gamelibrary-header-profile")}</ColoredText>
                        {t("gamelibrary-header-on")}
                        <ColoredText>Game</ColoredText>
                        {t("gamelibrary-header-xplorer")}
                        <ColoredText>{t("gamelibrary-header-collection")}</ColoredText>!
                    </SectionHeader>
                </LeftWrapper>
                <RightWrapper>
                    <NicknameInstructionsHeading>
                        {t("gamelibrary-nick-header")}
                    </NicknameInstructionsHeading>
                    <NicknameInstructionsList>
                        <li>{t("gamelibrary-nick-customize")}</li>
                        <li>{t("gamelibrary-nick-brag")}</li>
                        <li>{t("gamelibrary-nick-swap")}</li>
                    </NicknameInstructionsList>
                </RightWrapper>
            </SectionContainer>
        </GameLibraryContainer>
    )
}

export default GameLibrary
