import { FC } from "react"
import { ColoredText } from "../../Shared"
import { Hyperlink } from "../../Shared/sections.styles"
import {
    StyledButtonsBox,
    GradientText,
    HeaderAirdropIcon,
    HeaderAirdropWrapper,
    HeaderGetAirdrop,
    StyledLandingHeaderText,
    StyledParagraph,
    StyledForm,
    StyledNewsletterBox,
    StyledTitle,
    StyledWhitepaperBox,
    StyledWhitepaperMenu,
    StyledWhitepaperLangItem,
} from "./index.styles"
import { useTranslation } from "react-i18next"
import i18n from "i18n"
import { getWhitepaper } from "util/whitepaper"
import { useState } from "react"
import { assetsUrl, Languages } from "config"

const WhitepaperLangItem: FC<{ readonly lang: Languages }> = ({ lang }) => {
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
            {isMenuShown && (
                <StyledWhitepaperMenu>
                    <WhitepaperLangItem lang={Languages.en} />
                    <WhitepaperLangItem lang={Languages.pl} />
                </StyledWhitepaperMenu>
            )}
        </StyledWhitepaperBox>
    )
}

export const HeaderText = () => {
    const { t } = useTranslation()

    return (
        <StyledLandingHeaderText>
            <StyledTitle>
                The <GradientText>HashUp</GradientText> Cartridge
                <ColoredText>.</ColoredText>
            </StyledTitle>
            <StyledParagraph>{t("header.description")}</StyledParagraph>
            <StyledButtonsBox>
                <WhitepaperButton />
                <Hyperlink href="/#airdrop">
                    <HeaderAirdropWrapper>
                        <HeaderAirdropIcon />
                        <HeaderGetAirdrop>{t("header.airdrop")}</HeaderGetAirdrop>
                    </HeaderAirdropWrapper>
                </Hyperlink>
            </StyledButtonsBox>
            <StyledNewsletterBox>
                <span className="title">{t("header.ico-signup")}</span>
                <StyledForm>
                    <div
                        className="ml-form-embed"
                        data-account="3556595:b7a5n7e8w5"
                        data-form="5061527:j8h9l1"
                    ></div>
                </StyledForm>
            </StyledNewsletterBox>
        </StyledLandingHeaderText>
    )
}
