import { ColoredText } from "../Shared"
import {
    LeftWrapper,
    RightWrapper,
    SectionHeader,
    SectionLabel,
    SectionPhotoSimple,
    SectionText,
} from "../Shared/sections.styles"

import { StyledReversedSectionContainer, StyledGameContract, StyledGreyFlare } from "./index.styles"
import { useTranslation } from "react-i18next"
import { assetsUrl } from "config"

const GameContract = () => {
    const { t } = useTranslation()
    return (
        <>
            <StyledGameContract>
                <StyledReversedSectionContainer>
                    <RightWrapper>
                        <SectionPhotoSimple
                            src={assetsUrl("section-photos/photo3.png")}
                        ></SectionPhotoSimple>
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
                </StyledReversedSectionContainer>
                <StyledGreyFlare />
            </StyledGameContract>
        </>
    )
}

export default GameContract
