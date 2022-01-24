import { StyledColoredText } from "components/shared/utils.styles"
import { CartridgeType } from "config"
import { StyledButton1 } from "components/shared/buttons.styles"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import Link from "next/link"
import {
    StyledBackgroundFlare,
    StyledCartridgesBox,
    StyledAnchor,
    StyledCartridgeImgWrapper,
} from "./index.styles"
import React, { useCallback } from "react"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import { useParallax, getParallaxValue } from "hooks/parallax"
import { DeviceWidth, RawDeviceWidthPx } from "__styles__/consts"

import redCartridgeImg from "/public/assets/2d-cartridges/without-extras/red.png"
import blueCartridgeImg from "/public/assets/2d-cartridges/without-extras/blue.png"
import greenCartridgeImg from "/public/assets/2d-cartridges/without-extras/green.png"
import goldCartridgeImg from "/public/assets/2d-cartridges/without-extras/gold.png"
import grayCartridgeImg from "/public/assets/2d-cartridges/without-extras/gray.png"
import { CSSProperties } from "styled-components"

const cartridges: { type: CartridgeType; img: string; imgQuality: number; lazyBoundary: number }[] =
    [
        {
            type: CartridgeType.blue,
            img: blueCartridgeImg,
            imgQuality: 1,
            lazyBoundary: 200,
        },
        {
            type: CartridgeType.green,
            img: greenCartridgeImg,
            imgQuality: 1,
            lazyBoundary: 200,
        },
        {
            type: CartridgeType.gray,
            img: grayCartridgeImg,
            imgQuality: 10,
            lazyBoundary: 300,
        },
        {
            type: CartridgeType.red,
            img: redCartridgeImg,
            imgQuality: 10,
            lazyBoundary: 300,
        },
        {
            type: CartridgeType.gold,
            img: goldCartridgeImg,
            imgQuality: 55,
            lazyBoundary: 500,
        },
    ]

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

const Cartridges = () => {
    const { t } = useTranslation()

    return (
        <StyledSectionWrapper>
            <StyledAnchor id="cartridges" />
            <StyledBackgroundFlare />
            <StyledSectionLabel>{t("cartridges.label")}</StyledSectionLabel>
            <StyledSectionTitle>
                {t("cartridges.title.1")} <StyledColoredText>=</StyledColoredText>{" "}
                {t("cartridges.title.2")}
                <StyledColoredText>.</StyledColoredText>
                <br />
                Buy
                <StyledColoredText>2</StyledColoredText>
                Play
            </StyledSectionTitle>
            <StyledSectionParagraph>{t("cartridges.paragraph")}</StyledSectionParagraph>
            <CartridgesBox />
            <Link href="cartridges" passHref>
                <a>
                    <StyledButton1>
                        {t("cartridges.button.1")}{" "}
                        <StyledColoredText>{t("cartridges.button.2")}</StyledColoredText>
                    </StyledButton1>
                </a>
            </Link>
        </StyledSectionWrapper>
    )
}

export default Cartridges
