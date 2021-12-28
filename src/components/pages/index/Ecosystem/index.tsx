import { FC } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import { StyledIconsWrapper, StyledIconBox, StyledImagesBox } from "./index.styles"
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

export interface IconInterface {
    readonly label: JSX.Element
    readonly iconFilename: string
    readonly iconAlt: string
    readonly anchor: string
}

const Icon: FC<IconInterface> = ({ anchor, label, iconFilename, iconAlt }) => (
    <StyledIconBox href={`#${anchor}`} title={iconAlt} className={anchor}>
        <img src={assetsUrl(`our-ecosystem/${iconFilename}`)} className="icon" alt={iconAlt} />
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
        <img className="laptop" src={assetsUrl("our-ecosystem/laptop.png")} alt="GameCap Laptop" />
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
