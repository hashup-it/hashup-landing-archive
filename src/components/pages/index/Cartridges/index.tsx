import { StyledColoredText } from "components/shared/utils.styles"
import { assetsUrl, CartridgeType } from "config"
import { StyledButton1 } from "components/shared/buttons.styles"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import Link from "next/link"
import { StyledBackgroundFlare, StyledCartridgesBox, StyledAnchor } from "./index.styles"
import React from "react"
import { useTranslation } from "react-i18next"

const cartridges: CartridgeType[] = [
    CartridgeType.blue,
    CartridgeType.green,
    CartridgeType.gold,
    CartridgeType.gray,
    CartridgeType.red,
]

const CartridgesBox = () => (
    <StyledCartridgesBox>
        {cartridges.map(item => (
            <React.Fragment key={item}>
                <img
                    src={assetsUrl(`2d-cartridges/without-extras/${item}.png`)}
                    className={item}
                    alt={`${item} cartridge`}
                />
                {item === CartridgeType.gold && <div className="gold-glow" />}
            </React.Fragment>
        ))}
    </StyledCartridgesBox>
)

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
                        {t("cartridges.button.1")} <StyledColoredText>{t("cartridges.button.2")}</StyledColoredText>
                    </StyledButton1>
                </a>
            </Link>
        </StyledSectionWrapper>
    )
}

export default Cartridges
