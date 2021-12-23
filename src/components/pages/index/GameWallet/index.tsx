import { StyledColoredText } from "components/shared/utils.styles"
import { assetsUrl } from "config"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import { StyledImagesBox, StyledAnchor } from "./index.styles"
import { Trans, useTranslation } from "react-i18next"

const ImagesBox = () => (
    <StyledImagesBox>
        <img
            className="tablet"
            src={assetsUrl("game-wallet/tablet.png")}
            alt="GameWallet tablet screen"
        />
        <img
            className="phone"
            src={assetsUrl("game-wallet/phone.png")}
            alt="GameWallet phone screen"
        />
        <img className="red-dots-1" src={assetsUrl("game-wallet/red-dots.png")} alt="" />
        <div className="flare" />
    </StyledImagesBox>
)

const GameWallet = () => {
    const { t } = useTranslation()

    return (
        <>
            <StyledSectionWrapper>
                <StyledAnchor id="game-wallet" />
                <StyledSectionLabel>
                    Game<StyledColoredText>Wallet</StyledColoredText>
                </StyledSectionLabel>
                <StyledSectionTitle>
                    {t("game-wallet.title")}
                    <StyledColoredText>!</StyledColoredText>
                </StyledSectionTitle>
                <StyledSectionParagraph>
                    <Trans i18nKey={"game-wallet.paragraph"} />
                </StyledSectionParagraph>
            </StyledSectionWrapper>
            <ImagesBox />
        </>
    )
}

export default GameWallet
