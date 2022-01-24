import { FC } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import {
    StyledIconsWrapper,
    StyledIconBox,
    StyledImagesBox,
    StyledMainImageWrapper,
    StyledIconWrapper,
} from "./index.styles"
import { iconsData } from "./data"
import { assetsUrl } from "config"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
    StyledSeparator,
} from "components/shared/section.styles"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import { DeviceWidth, RawDeviceWidthPx } from "__styles__/consts"
import laptopImg from "/public/assets/our-ecosystem/laptop.png"
import { useScrollPercentage } from "react-scroll-percentage"
import { getParallaxValue, useParallax } from "hooks/parallax"
import { useCallback } from "react"
import { CSSProperties } from "styled-components"

export interface IconInterface {
    readonly label: JSX.Element
    readonly iconFilename: string
    readonly iconAlt: string
    readonly anchor: string
}

const Icon: FC<IconInterface> = ({ anchor, label, iconFilename, iconAlt }) => (
    <StyledIconBox href={`#${anchor}`} title={iconAlt} className={anchor}>
        <StyledIconWrapper>
            <Image
                src={assetsUrl(`our-ecosystem/${iconFilename}`)}
                className="icon"
                alt={iconAlt}
                width={60}
                height={60}
                priority
            />
        </StyledIconWrapper>
        <div className="label">{label}</div>
    </StyledIconBox>
)

const Icons = () => (
    <StyledIconsWrapper>
        {iconsData.map((item, index) => (
            <Icon {...item} key={index} />
        ))}
    </StyledIconsWrapper>
)

const Images = () => {
    const { ref, result } = useParallax<{ laptop: CSSProperties }>({
        onScroll: useCallback(percentage => {
            return {
                laptop: {
                    transform: `translateY(${getParallaxValue(percentage, 250, 0, 55)}px)`,
                    opacity: getParallaxValue(percentage, 0, 100, 50) / 100,
                },
            }
        }, []),
        minWindowWidth: RawDeviceWidthPx.laptop,
    })

    return (
        <StyledImagesBox ref={ref}>
            <StyledMainImageWrapper style={result?.laptop}>
                <Image
                    className="laptop"
                    src={laptopImg}
                    sizes={`(min-width: ${DeviceWidth.desktop}) 1600px, auto`}
                    alt="GameCap Laptop"
                    quality={55}
                    loading="lazy"
                    placeholder="blur"
                    lazyBoundary="500px"
                />
            </StyledMainImageWrapper>
            <div className="flare" />
        </StyledImagesBox>
    )
}

const Ecosystem = () => {
    const { t } = useTranslation()

    return (
        <>
            <StyledSectionWrapper>
                <div id="ecosystem" />
                <StyledSectionLabel>{t("ecosystem.label")}</StyledSectionLabel>
                <StyledSectionTitle>
                    {t("ecosystem.title")}
                    <StyledColoredText>.</StyledColoredText>
                </StyledSectionTitle>
                <StyledSectionParagraph>{t("ecosystem.paragraph")}</StyledSectionParagraph>
                <Icons />
                <Images />
            </StyledSectionWrapper>
            <StyledSeparator />
        </>
    )
}

export default Ecosystem
