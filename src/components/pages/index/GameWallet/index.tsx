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
import { DeviceWidth, RawDeviceWidthPx } from "__styles__/consts"
import { useCallback } from "react"
import { getParallaxValue, useParallax } from "hooks/parallax"
import { CSSProperties } from "styled-components"

interface ParallaxProps {
    readonly tablet: CSSProperties
    readonly phone: CSSProperties
    readonly redDots1: CSSProperties
}

const ImagesBox = () => {
    const { ref, result } = useParallax<ParallaxProps>({
        onScroll: useCallback(percentage => {
            const opacity = getParallaxValue(percentage, 0, 100, 50) / 100

            return {
                tablet: {
                    transform: `translateX(${getParallaxValue(percentage, -200, -100, 50)}px)`,
                    opacity,
                },
                phone: {
                    transform: `translateX(${getParallaxValue(percentage, 220, 100, 50)}px)`,
                    opacity,
                },
                redDots1: {
                    transform: `translateX(${getParallaxValue(percentage, -400, 0, 52)}px)`,
                    opacity,
                },
            }
        }, []),
        minWindowWidth: RawDeviceWidthPx.laptop,
    })

    return (
        <StyledImagesBox ref={ref}>
            <StyledImgWrapper className="tablet" style={result?.tablet}>
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
            <StyledImgWrapper className="phone" style={result?.phone}>
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
            <StyledImgWrapper className="red-dots-1" style={result?.redDots1}>
                <Image src={redDots1Img} alt="" quality={1} />
            </StyledImgWrapper>
            <div className="flare" />
        </StyledImagesBox>
    )
}

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
