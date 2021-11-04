import { AddToMetamask } from "components/Header/HeaderBottom/AddToMetamask"
import { ColoredText } from "components/Shared"
import { Hyperlink } from "components/Shared/sections.styles"
import { FC } from "react"
import {
    StyledAddToMetamaskGroup,
    StyledAirdropPopupWrapper,
    StyledClose,
    StyledMediaIcon,
    StyledPopupHeader,
    StyledPopupText,
    StyledPopupWindow,
    StyledPopupWindowWrapper,
    StyledTelegramContainer,
    StyledTelegramHeader,
    StyledTelegramIconWrapper,
    StyledTelegramLink,
    StyledTelegramText,
} from "./index.styles"
import { useTranslation } from "react-i18next"

interface AidropPopupProps {
    setPopupOpened: Function
}

export const AirdropPopup: FC<AidropPopupProps> = ({ setPopupOpened }) => {
    const { t } = useTranslation()

    return (
        <StyledAirdropPopupWrapper>
            <StyledPopupWindowWrapper>
                <StyledPopupWindow>
                    <StyledClose
                        onClick={() => setPopupOpened(false)}
                        src="/assets/icons/x-circle.svg"
                    />
                    <StyledPopupHeader>{t("airdroppopup-header")}</StyledPopupHeader>
                    <StyledPopupText>
                        {t("airdroppopup-text1")}
                        <ColoredText>#Hash</ColoredText>
                        {t("airdroppopup-text2")}
                    </StyledPopupText>
                    <StyledAddToMetamaskGroup>
                        {t("airdroppopup-metamask")} &gt; <AddToMetamask />
                    </StyledAddToMetamaskGroup>
                    <StyledTelegramContainer>
                        <StyledTelegramHeader>
                            <ColoredText>Obserwuj</ColoredText>
                            <br /> nasze social media
                        </StyledTelegramHeader>
                        <StyledTelegramLink>
                            <Hyperlink href="https://t.me/HashUpAnnouncements">
                                <StyledTelegramIconWrapper>
                                    <StyledMediaIcon src="/assets/icons/twitter.svg" />
                                </StyledTelegramIconWrapper>
                            </Hyperlink>
                            <StyledTelegramText>
                                <ColoredText>Announcement</ColoredText>
                                <br />
                                Twitter
                            </StyledTelegramText>
                        </StyledTelegramLink>
                        <StyledTelegramLink>
                            <Hyperlink href="https://t.me/HashUpAnnouncements">
                                <StyledTelegramIconWrapper>
                                    <StyledMediaIcon src="/assets/icons/telegram.svg" />
                                </StyledTelegramIconWrapper>
                            </Hyperlink>
                            <StyledTelegramText>
                                <ColoredText>Announcement</ColoredText>
                                <br />
                                Telegram
                            </StyledTelegramText>
                        </StyledTelegramLink>
                    </StyledTelegramContainer>
                </StyledPopupWindow>
            </StyledPopupWindowWrapper>
        </StyledAirdropPopupWrapper>
    )
}
