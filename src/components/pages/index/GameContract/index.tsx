import { StyledColoredText } from "components/shared/utils.styles"
import { StyledButton1 } from "components/shared/buttons.styles"
import Link from "next/link"
import {
    StyledBackgroundFlare,
    StyledImagesBox,
    StyledImgWrapper,
    StyledButtonBox,
} from "./index.styles"
import { Trans, useTranslation } from "react-i18next"
import Image from "next/image"
import { DeviceWidth, RawDeviceWidthPx } from "__styles__/consts"
import { useCallback } from "react"
import { getParallaxValue, useParallax } from "hooks/parallax"
import { CSSProperties } from "styled-components"
import SectionType2 from "components/shared/SectionType2"

import laptopImg from "/public/assets/home/game-contract/laptop.png"
import websiteImg from "/public/assets/home/game-contract/floating-website.png"
import redDots1Img from "/public/assets/home/game-contract/red-dots-1.png"
import redDots2Img from "/public/assets/home/game-contract/red-dots-2.png"

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

const Cartridges = () => (
    <SectionType2
        title={<Trans i18nKey="home.game-contract.title" />}
        paragraph={<Trans i18nKey="home.game-contract.paragraph" />}
        label={<Trans i18nKey="home.game-contract.label" />}
        anchor="game-contract"
    >
        <>
            <StyledButtonBox>
                <Link href="gamecontract" passHref>
                    <a>
                        <StyledButton1>
                            <Trans i18nKey="home.game-contract.button" />
                        </StyledButton1>
                    </a>
                </Link>
            </StyledButtonBox>
            <StyledBackgroundFlare />
            <ImagesBox />
        </>
    </SectionType2>
)

export default Cartridges
