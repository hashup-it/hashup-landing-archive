import { FC } from "react"
import { ColoredText } from "../../Shared"
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
                Video Game<ColoredText>Cartridges</ColoredText> on Blockchain
            </StyledLabel>
            <StyledTitle>
                Decentralized <br />
                Game Publishing Platform<ColoredText>.</ColoredText>
            </StyledTitle>
            <StyledParagraph>{t("header.description")}</StyledParagraph>
            <StyledButtonsBox>
                <a href="#airdrop">
                    <StyledButton>{t("header.airdrop")} </StyledButton>
                </a>
                <WhitepaperButton />
            </StyledButtonsBox>
        </StyledContainer>
    )
}
