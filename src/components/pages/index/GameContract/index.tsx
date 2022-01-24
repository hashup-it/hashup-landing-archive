import { StyledColoredText } from "components/shared/utils.styles"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import { StyledButton1 } from "components/shared/buttons.styles"
import Link from "next/link"
import {
    StyledBackgroundFlare,
    StyledAnchor,
    StyledButtonBox,
    StyledImagesBox,
    StyledImgWrapper,
} from "./index.styles"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import { DeviceWidth, RawDeviceWidthPx } from "__styles__/consts"

import laptopImg from "/public/assets/game-contract/laptop.png"
import websiteImg from "/public/assets/game-contract/floating-website.png"
import redDots1Img from "/public/assets/game-contract/red-dots-1.png"
import redDots2Img from "/public/assets/game-contract/red-dots-2.png"
import { useCallback } from "react"
import { getParallaxValue, useParallax } from "hooks/parallax"
import { CSSProperties } from "styled-components"

interface ParallaxProps {
    readonly laptop: CSSProperties
    readonly website: CSSProperties
    readonly redDots1: CSSProperties
    readonly redDots2: CSSProperties
}

const ImagesBox = () => {
    const { ref, result } = useParallax<ParallaxProps>({
        onScroll: useCallback(percentage => {
            const opacity = getParallaxValue(percentage, 0, 100, 50) / 100

            return {
                laptop: {
                    transform: `translateX(${getParallaxValue(percentage, -150, 0, 45)}px)`,
                    opacity,
                },
                website: {
                    transform: `translateX(${getParallaxValue(percentage, 400, 0, 45)}px)`,
                    opacity,
                },
                redDots1: {
                    transform: `translateX(${getParallaxValue(percentage, 200, 100, 50)}px)`,
                    opacity,
                },
                redDots2: {
                    transform: `translateX(${getParallaxValue(percentage, 150, 0, 60)}px)`,
                    opacity,
                },
            }
        }, []),
        minWindowWidth: RawDeviceWidthPx.laptop,
    })

    return (
        <StyledImagesBox ref={ref}>
            <StyledImgWrapper className="laptop" style={result?.laptop}>
                <Image
                    src={laptopImg}
                    alt="GameContract laptop website preview"
                    sizes={`(min-width: ${DeviceWidth.laptopL}): 1400px, 105vw`}
                    quality={60}
                    loading="lazy"
                    placeholder="blur"
                    lazyBoundary="500px"
                />
            </StyledImgWrapper>
            <StyledImgWrapper className="website" style={result?.website}>
                <Image
                    src={websiteImg}
                    alt="GameContract website preview"
                    sizes={`(min-width: ${DeviceWidth.laptopL}): 1400px, 100vw`}
                    quality={60}
                    loading="lazy"
                    placeholder="blur"
                    lazyBoundary="500px"
                />
            </StyledImgWrapper>
            <StyledImgWrapper className="red-dots-1" style={result?.redDots1}>
                <Image src={redDots1Img} alt="" quality={10} />
            </StyledImgWrapper>
            <StyledImgWrapper className="red-dots-2" style={result?.redDots2}>
                <Image src={redDots2Img} alt="" quality={10} />
            </StyledImgWrapper>
            <div className="flare" />
        </StyledImagesBox>
    )
}

const Button = () => {
    const { t } = useTranslation()

    return (
        <Link href="game-contract" passHref>
            <a>
                <StyledButton1>
                    {t("game-contract.button")} <StyledColoredText>GameContract</StyledColoredText>
                </StyledButton1>
            </a>
        </Link>
    )
}

const Cartridges = () => {
    const { t } = useTranslation()

    return (
        <StyledSectionWrapper>
            <StyledAnchor id="game-contract" />
            <StyledBackgroundFlare />
            <StyledSectionLabel>
                Game<StyledColoredText>Contract</StyledColoredText>.io
            </StyledSectionLabel>
            <StyledSectionTitle>
                {t("game-contract.title")}
                <StyledColoredText>!</StyledColoredText>
            </StyledSectionTitle>
            <StyledSectionParagraph>{t("game-contract.paragraph")}</StyledSectionParagraph>
            <StyledButtonBox>{/* <Button /> */}</StyledButtonBox>
            <ImagesBox />
        </StyledSectionWrapper>
    )
}

export default Cartridges
