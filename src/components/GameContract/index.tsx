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
                    <SectionLabel>FREE MARKET SOFTWARE</SectionLabel>
                    <SectionHeader>
                        {t("gamecontract-header1")}
                        <ColoredText>{t("gamecontract-header2")}</ColoredText>
                        {t("gamecontract-header3")}
                        <ColoredText>{t("gamecontract-header4")}</ColoredText>.
                    </SectionHeader>
                    <SectionText>{t("gamecontract-text")}</SectionText>
                </LeftWrapper>
            </ReversedSectionContainer>
        </StyledGameContract>
    )
}

export default GameContract
