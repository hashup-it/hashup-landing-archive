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
                    <SectionLabel>{t("gamecontract-label")}</SectionLabel>
                    <SectionHeader>
                        {t("gamecontract-header-create")}
                        <ColoredText>{t("gamecontract-header-cartridges")}</ColoredText>
                        {t("gamecontract-header-publish")}
                        <ColoredText>{t("gamecontract-header-brokerless")}</ColoredText>.
                    </SectionHeader>
                    <SectionText>{t("gamecontract-text")}</SectionText>
                </LeftWrapper>
            </ReversedSectionContainer>
        </StyledGameContract>
    )
}

export default GameContract
