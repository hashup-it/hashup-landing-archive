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
                        {t("gamelibrary-header1")}
                        <ColoredText>{t("gamelibrary-header2")}</ColoredText>
                        {t("gamelibrary-header3")}
                        <ColoredText>Game</ColoredText>
                        {t("gamelibrary-header4")}
                        <ColoredText>{t("gamelibrary-header5")}</ColoredText>!
                    </SectionHeader>
                </LeftWrapper>
                <RightWrapper>
                    <NicknameInstructionsHeading>
                        {t("gamelibrary-nick-header")}
                    </NicknameInstructionsHeading>
                    <NicknameInstructionsList>
                        <li>{t("gamelibrary-nick1")}</li>
                        <li>{t("gamelibrary-nick2")}</li>
                        <li>{t("gamelibrary-nick3")}</li>
                    </NicknameInstructionsList>
                </RightWrapper>
            </SectionContainer>
        </GameLibraryContainer>
    )
}

export default GameLibrary
