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
import { FC, useEffect, useState } from "react"
import Image from "next/image"

import mouseSvg from "/public/assets/icons/mouse.svg"

const GamersCount = dynamic(() => import("./GamersCount/index"), {
    loading: () => <StyledLoadingSpinner />,
})

const ScrollDownNote = () => {
    const { t } = useTranslation()

    return (
        <StyledScrollDownNote>
            <div className="mouse-icon-wrapper">
                <Image src={mouseSvg} alt="" width={20} height={25} />
            </div>
            <span className="text">
                {`${t("header.scroll.1")}`}
                <StyledColoredText>{t("header.scroll.2")}</StyledColoredText>
            </span>
        </StyledScrollDownNote>
    )
}

const SocialMediaIcon: FC<{ href: string; alt: string; src: string }> = ({ href, alt, src }) => (
    <a href={href}>
        <div className="icon-wrapper">
            <Image src={src} alt={alt} width={50} height={50} />
        </div>
    </a>
)

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
                    <SocialMediaIcon
                        href={SocialMediaUrls.linkedIn}
                        src={SocialMediaIcons.linkedin}
                        alt="LinkedIn"
                    />
                    <SocialMediaIcon
                        href={SocialMediaUrls.telegram}
                        src={SocialMediaIcons.telegram}
                        alt="Telegram"
                    />
                    <SocialMediaIcon
                        href={SocialMediaUrls.twitter}
                        src={SocialMediaIcons.twitter}
                        alt="Twitter"
                    />
                    <SocialMediaIcon
                        href={SocialMediaUrls.facebook}
                        src={SocialMediaIcons.facebook}
                        alt="Facebook"
                    />
                    <SocialMediaIcon
                        href={SocialMediaUrls.instagram}
                        src={SocialMediaIcons.instagram}
                        alt="Instagram"
                    />
                    <SocialMediaIcon
                        href={SocialMediaUrls.discord}
                        src={SocialMediaIcons.discord}
                        alt="Discord"
                    />
                </StyledSocialMediaBox>
            </StyledDataGroup>
        </StyledContainer>
    )
}

export default HeaderBottom
