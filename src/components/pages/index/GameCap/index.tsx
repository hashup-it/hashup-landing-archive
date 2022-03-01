import { StyledColoredText } from "components/shared/utils.styles"
import { StyledButton1 } from "components/shared/buttons.styles"
import SectionType1 from "components/shared/SectionType1"
import { StyledImagesBox, StyledImgWrapper } from "./index.styles"
import { StyledMainImageWrapper } from "components/shared/SectionType1/index.styles"
import { Trans, useTranslation } from "react-i18next"
import Image from "next/image"
import { DeviceWidth, RawDeviceWidthPx } from "__styles__/consts"
import { useCallback } from "react"
import { getParallaxValue, useParallax } from "hooks/parallax"
import { CSSProperties } from "styled-components"

import mainImg from "/public/assets/infographics/game-cap/website-preview.png"
import bgImg from "/public/assets/infographics/game-cap/lying-website.png"
import redDotsImg1 from "/public/assets/design-elements/red-dots-1.png"

interface ParallaxProps {
    readonly mainImage: CSSProperties
    readonly redDots1: CSSProperties
}

const ImagesBox = () => {
    const { ref, result } = useParallax<ParallaxProps>({
        onScroll: useCallback(percentage => {
            const opacity = getParallaxValue(percentage, 0, 100, 55) / 100

            return {
                mainImage: {
                    transform: `translateX(${getParallaxValue(percentage, 250, 25, 55)}px)`,
                    opacity,
                },
                redDots1: {
                    transform: `translateX(${getParallaxValue(percentage, -300, 0, 55)}px)`,
                    opacity,
                },
            }
        }, []),
        minWindowWidth: RawDeviceWidthPx.laptop,
    })

    return (
        <StyledImagesBox ref={ref}>
            <StyledMainImageWrapper style={result?.mainImage}>
                <Image
                    src={mainImg}
                    alt="GameCap website preview"
                    layout="responsive"
                    sizes={`(max-width: ${DeviceWidth.mobileL}) 350px, auto`}
                    quality={75}
                    loading="lazy"
                    placeholder="blur"
                    lazyBoundary="400px"
                />
            </StyledMainImageWrapper>
            <StyledImgWrapper className="red-dots-1" style={result?.redDots1}>
                <Image src={redDotsImg1} alt="" quality={5} lazyBoundary="300px" />
            </StyledImgWrapper>
            <div className="flare" />
        </StyledImagesBox>
    )
}

const Button = () => {
    const { t } = useTranslation()

    return (
        <StyledButton1>
            {t("game-cap.button")} <StyledColoredText>GameCap</StyledColoredText>
        </StyledButton1>
    )
}

const GameCap = () => (
    <SectionType1
        anchor="game-cap"
        label={<Trans i18nKey="home.game-cap.label" />}
        title={<Trans i18nKey="home.game-cap.title" />}
        paragraph={<Trans i18nKey={"home.game-cap.paragraph"} />}
        bgImg={{
            src: bgImg,
            alt: "GameCap.io website preview",
        }}
        imagesBox={<ImagesBox />}
    />
)

export default GameCap
