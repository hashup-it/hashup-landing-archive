import { StyledColoredText } from "components/shared/utils.styles"
import { AddToMetamask } from "./AddToMetamask"
import { CopyAdress } from "./CopyAdress"
import {
    StyledDataGroup,
    StyledContainer,
    StyledScrollDownNote,
    StyledSocialMediaBox,
    StyledTokenInfo,
    StyledTokenInfoItem,
} from "./index.styles"
import { assetsUrl, SocialMediaIcons, SocialMediaUrls } from "config"
import { useTranslation } from "react-i18next"
import dynamic from "next/dynamic"
import { StyledLoadingSpinner } from "components/shared/loading.styles"
import { useEffect, useState } from "react"

const GamersCount = dynamic(() => import("./GamersCount/index"), {
    loading: () => <StyledLoadingSpinner />,
})

const ScrollDownNote = () => {
    const { t } = useTranslation()

    return (
        <StyledScrollDownNote>
            <img className="mouse-icon" src={assetsUrl("icons/mouse.svg")} alt="" />
            <span className="text">
                {`${t("header.scroll.1")}`}
                <StyledColoredText>{t("header.scroll.2")}</StyledColoredText>
            </span>
        </StyledScrollDownNote>
    )
}

const HeaderBottom = () => {
    const [isGamersCountShown, setIsGamersCountShown] = useState<boolean>(false)
    const { t } = useTranslation()

    useEffect(() => {
        // Lazy loading
        setTimeout(() => setIsGamersCountShown(true), 1000)
    }, [])

    return (
        <StyledContainer>
            <ScrollDownNote />
            <StyledDataGroup>
                <StyledTokenInfo>
                    <StyledTokenInfoItem>
                        <b>{t("header.all-gamers")}</b>
                        {isGamersCountShown ? <GamersCount /> : <StyledLoadingSpinner />}
                    </StyledTokenInfoItem>
                    <StyledTokenInfoItem>
                        <b>{t("header.contract")}</b>
                        <CopyAdress />
                    </StyledTokenInfoItem>
                    <StyledTokenInfoItem>
                        <AddToMetamask />
                    </StyledTokenInfoItem>
                </StyledTokenInfo>
                <StyledSocialMediaBox>
                    <a href={SocialMediaUrls.linkedIn}>
                        <img src={SocialMediaIcons.linkedin} alt="LinkedIn" />
                    </a>
                    <a href={SocialMediaUrls.telegram}>
                        <img src={SocialMediaIcons.telegram} alt="Telegram" />
                    </a>
                    <a href={SocialMediaUrls.twitter}>
                        <img src={SocialMediaIcons.twitter} alt="Twitter" />
                    </a>
                    <a href={SocialMediaUrls.facebook}>
                        <img src={SocialMediaIcons.facebook} alt="Facebook" />
                    </a>
                    <a href={SocialMediaUrls.instagram}>
                        <img src={SocialMediaIcons.instagram} alt="Instagram" />
                    </a>
                    <a href={SocialMediaUrls.discord}>
                        <img src={SocialMediaIcons.discord} alt="Discord" />
                    </a>
                </StyledSocialMediaBox>
            </StyledDataGroup>
        </StyledContainer>
    )
}

export default HeaderBottom
