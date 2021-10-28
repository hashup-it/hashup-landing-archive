import { ColoredText } from "components/Shared";
import { FC } from "react";
import { StyledAirdropPopupWrapper, StyledClose, StyledPopupHeader, StyledPopupText, StyledPopupWindow, StyledPopupWindowWrapper, StyledTelegramContainer, StyledTelegramHeader, StyledTelegramIconWrapper, StyledTelegramLink, StyledTelegramText} from "./index.styles";

interface AidropPopupProps {
    setPopupOpened: Function;
}

export const AirdropPopup :FC<AidropPopupProps> = ({
    setPopupOpened
}) => {
    return (
        <StyledAirdropPopupWrapper>
            <StyledPopupWindowWrapper>
                <StyledPopupWindow>
                    <StyledClose onClick={() => setPopupOpened(false)} src="/assets/icons/x-circle.svg"/>
                    <StyledPopupHeader>Success</StyledPopupHeader>
                    <StyledPopupText>
                        We have just sent your first <ColoredText>#Hash</ColoredText> to your wallet.
                    </StyledPopupText>
                    <StyledTelegramContainer>
                        <StyledTelegramHeader>
                            Be sure to <ColoredText>join</ColoredText><br/> our social media
                        </StyledTelegramHeader>
                        <StyledTelegramLink>
                            <StyledTelegramIconWrapper>

                            </StyledTelegramIconWrapper>
                            <StyledTelegramText>
                                <ColoredText>Disscusion</ColoredText><br/>Telegram
                            </StyledTelegramText>
                        </StyledTelegramLink>
                        <StyledTelegramLink>
                            <StyledTelegramIconWrapper>
                            
                            </StyledTelegramIconWrapper>
                            <StyledTelegramText>
                                <ColoredText>Announcement</ColoredText><br/>Telegram
                            </StyledTelegramText>
                        </StyledTelegramLink>
                    </StyledTelegramContainer>
                </StyledPopupWindow>
            </StyledPopupWindowWrapper>
        </StyledAirdropPopupWrapper>
    )

}