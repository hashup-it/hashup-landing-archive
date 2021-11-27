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
                        <img src="/assets/icons/button-metamask.svg" alt="" />
                    </ConnectionButton>
                    <ConnectionButton>
                        {t("newsletter.coming-soon")}
                        <img src="/assets/icons/button-wallet-connect.svg" alt="connect" />
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
