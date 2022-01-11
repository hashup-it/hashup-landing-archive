import { StyledColoredText } from "components/shared/utils.styles"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import { StyledImagesBox, StyledAnchor, StyledImgWrapper } from "./index.styles"
import { Trans, useTranslation } from "react-i18next"
import Image from "next/image"

import tabletImg from "/public/assets/game-wallet/tablet.png"
import phoneImg from "/public/assets/game-wallet/phone.png"
import redDots1Img from "/public/assets/game-wallet/red-dots.png"
import { DeviceWidth } from "__styles__/consts"

const ImagesBox = () => (
    <StyledImagesBox>
        <StyledImgWrapper className="tablet">
            <Image
                src={tabletImg}
                alt="GameWallet tablet screen"
                quality={75}
                sizes={`95vw`}
                loading="lazy"
                placeholder="blur"
                lazyBoundary="500px"
            />
        </StyledImgWrapper>
        <StyledImgWrapper className="phone">
            <Image
                src={phoneImg}
                alt="GameWallet phone screen"
                quality={60}
                sizes={`50vw`}
                loading="lazy"
                placeholder="blur"
                lazyBoundary="400px"
            />
        </StyledImgWrapper>
        <StyledImgWrapper className="red-dots-1">
            <Image src={redDots1Img} alt="" quality={1} />
        </StyledImgWrapper>
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
