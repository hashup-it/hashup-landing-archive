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

interface AidropPopupProps {
    setPopupOpened: Function
}

export const AirdropPopup: FC<AidropPopupProps> = ({ setPopupOpened }) => {
    return (
        <StyledAirdropPopupWrapper>
            <StyledPopupWindowWrapper>
                <StyledPopupWindow>
                    <StyledClose
                        onClick={() => setPopupOpened(false)}
                        src="/assets/icons/x-circle.svg"
                    />
                    <StyledPopupHeader>Success</StyledPopupHeader>
                    <StyledPopupText>
                        We have just sent your first <ColoredText>#Hash</ColoredText> to your
                        wallet.
                    </StyledPopupText>
                    <StyledAddToMetamaskGroup>
                        Add Hash to metamask &gt; <AddToMetamask />
                    </StyledAddToMetamaskGroup>
                    <StyledTelegramContainer>
                        <StyledTelegramHeader>
                            Be sure to <ColoredText>join</ColoredText>
                            <br /> our social media
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
