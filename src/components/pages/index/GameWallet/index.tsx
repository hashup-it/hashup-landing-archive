import { StyledImagesBox, StyledImgWrapper } from "./index.styles"
import { Trans } from "react-i18next"
import Image from "next/image"
import { useCallback } from "react"
import { RawDeviceWidthPx } from "__styles__/consts"
import { getParallaxValue, useParallax } from "hooks/parallax"
import { CSSProperties } from "styled-components"

import tabletImg from "/public/assets/infographics/game-wallet/tablet.png"
import phoneImg from "/public/assets/infographics/game-wallet/phone.png"
import redDotsImg from "/public/assets/design-elements/red-dots-1.png"
import SectionType2 from "components/shared/SectionType2"

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
                <Image src={redDotsImg} alt="" quality={1} />
            </StyledImgWrapper>
            <div className="flare" />
        </StyledImagesBox>
    )
}

const GameWallet = () => (
    <SectionType2
        anchor="game-wallet"
        title={<Trans i18nKey={"home.game-wallet.title"} />}
        label={<Trans i18nKey={"home.game-wallet.label"} />}
        paragraph={<Trans i18nKey={"home.game-wallet.paragraph"} />}
        marginTop="300px"
    >
        <ImagesBox />
    </SectionType2>
)

export default GameWallet
