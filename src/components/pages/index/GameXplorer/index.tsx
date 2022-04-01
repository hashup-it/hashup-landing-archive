import { useCallback } from "react"
import SectionType1 from "components/shared/SectionType1"
import { StyledColoredText } from "components/shared/utils.styles"
import { StyledButton1 } from "components/shared/buttons.styles"
import { StyledImagesBox, StyledImgWrapper } from "./index.styles"
import { StyledMainImageWrapper } from "components/shared/SectionType1/index.styles"
import { Trans, useTranslation } from "react-i18next"
import Image from "next/image"
import { DeviceWidth, RawDeviceWidthPx } from "__styles__/consts"
import { getParallaxValue, useParallax } from "hooks/parallax"
import { CSSProperties } from "styled-components"

import bgImg from "/public/assets/infographics/game-xplorer/lying-website.png"
import mainImg from "/public/assets/infographics/game-xplorer/website-preview.png"
import redDotsImg1 from "/public/assets/design-elements/red-dots-2.png"
import redDotsImg2 from "/public/assets/design-elements/red-dots-1.png"
import Link from "next/link"

interface ParallaxProps {
    readonly mainImage: CSSProperties
    readonly redDots1: CSSProperties
    readonly redDots2: CSSProperties
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
                redDots2: {
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
                    alt="GameXplorer website preview"
                    layout="responsive"
                    sizes={`(max-width: ${DeviceWidth.mobileL}) 350px, auto`}
                    quality={75}
                    loading="lazy"
                    placeholder="blur"
                    lazyBoundary="400px"
                />
            </StyledMainImageWrapper>
            <StyledImgWrapper className="red-dots-1" style={result?.redDots1}>
                <Image src={redDotsImg1} alt="" quality={15} lazyBoundary="300px" />
            </StyledImgWrapper>
            <StyledImgWrapper className="red-dots-2" style={result?.redDots2}>
                <Image src={redDotsImg2} alt="" quality={15} lazyBoundary="300px" />
            </StyledImgWrapper>
        </StyledImagesBox>
    )
}

const Button = () => (
    <StyledButton1>
        <Link href="/gamexplorer" passHref>
            <a>
                <Trans i18nKey="home.game-xplorer.button" />
            </a>
        </Link>
    </StyledButton1>
)

const GameXplorer = () => (
    <SectionType1
        anchor="game-xplorer"
        label={<Trans i18nKey={"home.game-xplorer.label"} />}
        title={<Trans i18nKey={"home.game-xplorer.title"} />}
        paragraph={<Trans i18nKey={"home.game-xplorer.paragraph"} />}
        bgImg={{
            src: bgImg,
            alt: "GameXplorer.io website preview",
        }}
        imagesBox={<ImagesBox />}
        button={<Button />}
    />
)

export default GameXplorer
