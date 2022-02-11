import { StyledColoredText } from "components/shared/utils.styles"
import React, { FC } from "react"
import {
    StyledBrandMaterialsWrapper,
    StyledMaterialItemBox,
    StyledMaterialsList,
    StyledImg1Wrapper,
    StyledImg2Wrapper,
} from "./index.styles"
import { DownloadButton, StyledTitle } from "../shared"
import Image from "next/image"
import { Materials } from "../data"
import { useTranslation } from "react-i18next"

const brandMaterialImg1 = require("/public/assets/brand/logo.svg")
const brandMaterialImg2 = require("/public/assets/media/promo-thumbnail.png")

const MaterialItem: FC<{
    href: string
    title: string
    img: JSX.Element
    description: JSX.Element
}> = ({ href, img, title, description }) => {
    const { t } = useTranslation()

    return (
        <StyledMaterialItemBox>
            <div className="img-box">{img}</div>
            <h3 className="label">{title}</h3>
            <div className="description-box">{description}</div>
            <div className="button-box">
                <DownloadButton href={href} label={t("media.brand-materials.download-button")} />
            </div>
        </StyledMaterialItemBox>
    )
}

const BrandMaterials = () => {
    const { t } = useTranslation()

    return (
        <StyledBrandMaterialsWrapper>
            <StyledTitle>{t("media.brand-materials.section-title")}</StyledTitle>
            <StyledMaterialsList>
                <MaterialItem
                    href={Materials.logosAndBrand}
                    img={
                        <StyledImg1Wrapper>
                            <Image
                                src={brandMaterialImg1}
                                alt="HashUp Logo"
                                sizes="250px"
                                priority
                            />
                        </StyledImg1Wrapper>
                    }
                    description={
                        <>
                            {t("media.brand-materials.items.0.description-1")} ai
                            <StyledColoredText>.</StyledColoredText> svg
                            <StyledColoredText>.</StyledColoredText> eps
                            <StyledColoredText>.</StyledColoredText> png
                            <StyledColoredText>.</StyledColoredText>
                            <br />
                            {t("media.brand-materials.items.0.description-2")}
                        </>
                    }
                    title={t("media.brand-materials.items.0.label")}
                />
                <MaterialItem
                    href={Materials.promoVideo}
                    img={
                        <StyledImg2Wrapper>
                            <Image
                                src={brandMaterialImg2}
                                alt="HashUp Promo Video"
                                sizes="300px"
                                priority
                            />
                        </StyledImg2Wrapper>
                    }
                    description={
                        <>
                            {t("media.brand-materials.items.1.description-1")} mp4
                            <StyledColoredText>.</StyledColoredText>
                            <br />
                            {t("media.brand-materials.items.1.description-2")}{" "}
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href={Materials.promoVideoYouTube}
                                title="HashUp Promo - Youtube"
                            >
                                LINK
                            </a>
                        </>
                    }
                    title="Promo video"
                />
            </StyledMaterialsList>
        </StyledBrandMaterialsWrapper>
    )
}

export default BrandMaterials
