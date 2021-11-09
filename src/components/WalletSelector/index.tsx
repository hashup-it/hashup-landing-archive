import {
    ButtonClose,
    ButtonsContainer,
    ConnectionButton,
    ConnectionHeader,
    ConnectionText,
    ContentWrapper,
    PermanentHyperlink,
    WalletSelectorContainer,
} from "./index.styles"
import { ColoredText } from "../Shared"
import { useTranslation } from "react-i18next"
import { useAccountContext } from "context/account"

export const WalletSelector = () => {
    const { t } = useTranslation()
    const { hideWalletSelector, handleMetamaskConnection } = useAccountContext()

    return (
        <WalletSelectorContainer>
            <ContentWrapper>
                <ButtonClose onClick={hideWalletSelector} />
                <ConnectionHeader>
                    {t("walletselector-header1")}
                    <ColoredText>{t("walletselector-header2")}</ColoredText>
                </ConnectionHeader>
                <ConnectionText>{t("walletselector-text")}</ConnectionText>

                <ButtonsContainer>
                    <ConnectionButton
                        onClick={() => {
                            handleMetamaskConnection()
                            hideWalletSelector()
                        }}
                    >
                        MetaMask
                        <img src="/assets/icons/button-metamask.svg" alt="" />
                    </ConnectionButton>
                    <ConnectionButton>
                        {t("newsletter-comingsoon")}
                        <img src="/assets/icons/button-wallet-connect.svg" alt="connect" />
                    </ConnectionButton>
                </ButtonsContainer>
            </ContentWrapper>
            <ConnectionText>
                {t("walletselector-nowallet")}
                <PermanentHyperlink href="https://metamask.io/">
                    {t("walletselector-create")}
                </PermanentHyperlink>
            </ConnectionText>
        </WalletSelectorContainer>
    )
}
