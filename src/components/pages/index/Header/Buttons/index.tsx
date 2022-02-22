import { FC } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import {
    StyledButtonsBox,
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
import { StyledButton2 } from "components/shared/buttons.styles"

const WhitepaperLangItem: FC<{ readonly lang: keyof typeof Languages }> = ({ lang }) => {
    const { t } = useTranslation()

    return (
        <StyledWhitepaperLangItem
            href={getWhitepaper(lang)}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="icon-wrapper">
                <Image
                    src={assetsUrl("icons/document.svg")}
                    alt={`HashUp Whitepaper - ${String(lang)}`}
                    width={20}
                    height={20}
                    priority
                />
            </div>
            {t(`languages.${String(lang)}`)}
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
                        src={assetsUrl("random-icons/red-arrow.svg")}
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

const Buttons = () => {
    const { t } = useTranslation()

    return (
        <StyledButtonsBox>
            <Link href="cartridges" passHref>
                <a>
                    <StyledButton2>{t("home.header.button")} </StyledButton2>
                </a>
            </Link>
            <WhitepaperButton />
        </StyledButtonsBox>
    )
}

export default Buttons
