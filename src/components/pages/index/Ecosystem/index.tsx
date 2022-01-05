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
import { DeviceWidth } from "__styles__/consts"
import laptopImg from "/public/assets/our-ecosystem/laptop.png"

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

const Images = () => (
    <StyledImagesBox>
        <StyledMainImageWrapper>
            <Image
                className="laptop"
                src={laptopImg}
                sizes={`(min-width: ${DeviceWidth.desktop}) 1600px, auto`}
                alt="GameCap Laptop"
                quality={75}
                priority
            />
        </StyledMainImageWrapper>
        <div className="flare" />
    </StyledImagesBox>
)

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
