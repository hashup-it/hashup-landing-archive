import { FC } from "react"
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

const WhitepaperLangItem: FC<{ readonly lang: keyof typeof Languages }> = ({ lang }) => {
    const { t } = useTranslation()

    return (
        <StyledWhitepaperLangItem href={getWhitepaper(lang)}>
            <img src={assetsUrl("icons/document.svg")} alt={`HashUp Whitepaper - ${lang}`} />
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
            Whitepaper
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
