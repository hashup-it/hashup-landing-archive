import { FC } from "react"
import { ColoredText } from "../../Shared"
import { Hyperlink } from "../../Shared/sections.styles"
import {
    StyledLabel,
    StyledTitle,
    StyledButtonsBox,
    StyledGetAirdropButton,
    StyledContainer,
    StyledParagraph,
    StyledForm,
    StyledNewsletterBox,
    StyledWhitepaperBox,
    StyledWhitepaperMenu,
    StyledWhitepaperLangItem,
} from "./index.styles"
import { useTranslation } from "react-i18next"
import { getWhitepaper } from "util/whitepaper"
import { useState } from "react"
import { assetsUrl, Languages } from "config"

const GetAirdropButton: FC<{ readonly text: string }> = ({ text }) => (
    <StyledGetAirdropButton>
        <div className="icon" />
        <div className="text">{text}</div>
    </StyledGetAirdropButton>
)

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
            <StyledWhitepaperMenu isShown={isMenuShown}>
                <WhitepaperLangItem lang={Languages.en} />
                <WhitepaperLangItem lang={Languages.pl} />
            </StyledWhitepaperMenu>
        </StyledWhitepaperBox>
    )
}

export const HeaderText = () => {
    const { t } = useTranslation()

    return (
        <StyledContainer>
            <StyledLabel>
                The Hash<ColoredText>Up</ColoredText> Cartridge
            </StyledLabel>
            <StyledTitle>
                Decentralized <br />
                Game Publishing Platform<ColoredText>.</ColoredText>
            </StyledTitle>
            <StyledParagraph>{t("header.description")}</StyledParagraph>
            <StyledButtonsBox>
                <WhitepaperButton />
                <Hyperlink href="/#airdrop">
                    <GetAirdropButton text={t("header.airdrop")} />
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
        </StyledContainer>
    )
}
