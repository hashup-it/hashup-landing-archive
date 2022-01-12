import { FC, useEffect } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import {
    StyledLabel,
    StyledTitle,
    StyledButtonsBox,
    StyledButton,
    StyledContainer,
    StyledParagraph,
    StyledWhitepaperBox,
    StyledWhitepaperMenu,
    StyledWhitepaperLangItem,
} from "./index.styles"
import { useTranslation } from "react-i18next"
import { getWhitepaper } from "util/whitepaper"
import { useState } from "react"
import { assetsUrl, Languages } from "config"
import Link from "next/link"
import Image from "next/image"

const WhitepaperLangItem: FC<{ readonly lang: keyof typeof Languages }> = ({ lang }) => {
    const { t } = useTranslation()

    return (
        <StyledWhitepaperLangItem href={getWhitepaper(lang)}>
            <div className="icon-wrapper">
                <Image
                    src={assetsUrl("icons/document.svg")}
                    alt={`HashUp Whitepaper - ${lang}`}
                    width={20}
                    height={20}
                    priority
                />
            </div>
            {t(`languages.${lang}`)}
        </StyledWhitepaperLangItem>
    )
}

const WhitepaperButton = () => {
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false)

    return (
        <StyledWhitepaperBox
            onClick={() => setIsMenuShown(!isMenuShown)}
            onMouseEnter={() => setIsMenuShown(true)}
            onMouseLeave={() => setIsMenuShown(false)}
            isMenuShown={isMenuShown}
        >
            <div className="button-content">
                Whitepaper<StyledColoredText>.</StyledColoredText>
                <div className="arrow-wrapper">
                    <Image
                        src={assetsUrl("header/arrow.svg")}
                        width={20}
                        height={20}
                        alt=""
                        priority
                    />
                </div>
            </div>
            <StyledWhitepaperMenu isShown={isMenuShown}>
                <WhitepaperLangItem lang={Languages.en.code} />
                <WhitepaperLangItem lang={"pl"} />
            </StyledWhitepaperMenu>
        </StyledWhitepaperBox>
    )
}

export const HeaderText = () => {
    const { t } = useTranslation()

    return (
        <StyledContainer>
            <StyledLabel>
                {t("header.label.1")} <StyledColoredText>{t("header.label.2")}</StyledColoredText>{" "}
                {t("header.label.3")}
            </StyledLabel>
            <StyledTitle>
                {t("header.title")}
                <StyledColoredText>.</StyledColoredText>
            </StyledTitle>
            <StyledParagraph>{t("header.description")}</StyledParagraph>
            <StyledButtonsBox>
                <Link href="cartridges" passHref>
                    <a>
                        <StyledButton>{t("header.button")} </StyledButton>
                    </a>
                </Link>
                <WhitepaperButton />
            </StyledButtonsBox>
        </StyledContainer>
    )
}
