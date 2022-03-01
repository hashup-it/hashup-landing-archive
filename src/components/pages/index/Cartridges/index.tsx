import { CartridgeType } from "config"
import { StyledButton1 } from "components/shared/buttons.styles"
import Link from "next/link"
import {
    StyledContentBox,
    StyledBackgroundFlare,
    StyledCartridgesBox,
    StyledCartridgeImgWrapper,
} from "./index.styles"
import React, { useCallback } from "react"
import { Trans } from "react-i18next"
import Image from "next/image"
import { useParallax, getParallaxValue } from "hooks/parallax"
import { DeviceWidth, RawDeviceWidthPx } from "__styles__/consts"
import { CSSProperties } from "styled-components"
import { cartridges } from "./data"
import SectionType2 from "components/shared/SectionType2"

const CartridgesBox = () => {
    const { ref, result } = useParallax<Record<CartridgeType, CSSProperties>>({
        onScroll: useCallback(percentage => {
            const level1Value = getParallaxValue(percentage, 100, 330, 45)
            const level2Value = getParallaxValue(percentage, 100, 665, 45)

            return {
                [CartridgeType.red]: {
                    transform: `translateX(-${level1Value}px)`,
                },
                [CartridgeType.gray]: {
                    transform: `translateX(${level1Value}px)`,
                },
                [CartridgeType.blue]: {
                    transform: `translateX(-${level2Value}px)`,
                },
                [CartridgeType.green]: {
                    transform: `translateX(${level2Value}px)`,
                },
                [CartridgeType.gold]: {},
            }
        }, []),
        minWindowWidth: RawDeviceWidthPx.laptop,
    })

    return (
        <StyledCartridgesBox ref={ref}>
            {cartridges.map(item => (
                <React.Fragment key={item.type}>
                    <StyledCartridgeImgWrapper
                        className={item.type}
                        style={result && result[item.type]}
                    >
                        <Image
                            src={item.img}
                            alt={`${item.type} cartridge`}
                            sizes={`(min-width: ${DeviceWidth.desktop}) 630px, (max-width: ${DeviceWidth.tablet}) 460px, auto`}
                            quality={item.imgQuality}
                            loading="lazy"
                            placeholder="blur"
                            lazyBoundary={`${item.lazyBoundary}px`}
                        />
                    </StyledCartridgeImgWrapper>
                    {item.type === CartridgeType.gold && <div className="gold-glow" />}
                </React.Fragment>
            ))}
        </StyledCartridgesBox>
    )
}

const Cartridges = () => (
    <SectionType2
        anchor="cartridges"
        title={<Trans i18nKey="home.cartridges.title" />}
        label={<Trans i18nKey="home.cartridges.label" />}
        paragraph={<Trans i18nKey="home.cartridges.paragraph" />}
    >
        <StyledContentBox>
            <StyledBackgroundFlare />
            <CartridgesBox />
            <Link href="cartridges" passHref>
                <a>
                    <StyledButton1>
                        <Trans i18nKey="home.cartridges.button" />
                    </StyledButton1>
                </a>
            </Link>
        </StyledContentBox>
    </SectionType2>
)

export default Cartridges
