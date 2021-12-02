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
import { assetsUrl } from "config"

export const WalletSelector = () => {
    const { t } = useTranslation()
    const { hideWalletSelector, handleMetamaskConnection } = useAccountContext()

    return (
        <WalletSelectorContainer>
            <ContentWrapper>
                <ButtonClose onClick={hideWalletSelector} />
                <ConnectionHeader>
                    {t("wallet-selector.header-1")}
                    <ColoredText>{t("wallet-selector.header-2")}</ColoredText>
                </ConnectionHeader>
                <ConnectionText>{t("wallet-selector.text")}</ConnectionText>

                <ButtonsContainer>
                    <ConnectionButton
                        onClick={() => {
                            handleMetamaskConnection()
                            hideWalletSelector()
                        }}
                    >
                        MetaMask
                        <img src={assetsUrl("icons/button-metamask.svg")} alt="Metamask" />
                    </ConnectionButton>
                    <ConnectionButton
                        onClick={() => {
                            handleMetamaskConnection()
                            hideWalletSelector()
                        }}
                    >
                        TrustWallet
                        <img
                            src={assetsUrl("social-media-icons/trust-wallet.svg")}
                            alt="Connect to TrustWallet"
                        />
                    </ConnectionButton>
                </ButtonsContainer>
            </ContentWrapper>
            <ConnectionText>
                {t("wallet-selector.nowallet")}
                <PermanentHyperlink href="https://metamask.io/">
                    {t("wallet-selector.create")}
                </PermanentHyperlink>
            </ConnectionText>
        </WalletSelectorContainer>
    )
}
