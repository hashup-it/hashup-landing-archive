import { ColoredText } from "../Shared"
import {
    LeftWrapper,
    RightWrapper,
    SectionHeader,
    SectionLabel,
    SectionPhotoSimple,
    SectionText,
} from "../Shared/sections.styles"
import { ReversedSectionContainer, StyledGameContract } from "./index.styles"
import { useTranslation } from "react-i18next"

const GameContract = () => {
    const { t } = useTranslation()
    return (
        <StyledGameContract>
            <ReversedSectionContainer>
                <RightWrapper>
                    <SectionPhotoSimple src="/assets/section-photos/photo3.png"></SectionPhotoSimple>
                </RightWrapper>
                <LeftWrapper>
                    <SectionLabel>{t("game-contract.label")}</SectionLabel>
                    <SectionHeader>
                        {t("game-contract.header-create")}
                        <ColoredText>{t("game-contract.header-cartridges")}</ColoredText>
                        {t("game-contract.header-publish")}
                        <ColoredText>{t("game-contract.header-brokerless")}</ColoredText>.
                    </SectionHeader>
                    <SectionText>{t("game-contract.text")}</SectionText>
                </LeftWrapper>
            </ReversedSectionContainer>
        </StyledGameContract>
    )
}

export default GameContract
