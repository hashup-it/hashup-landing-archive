import {
    StyledAddress,
    StyledConnectWallet,
    StyledWalletTextWrapper,
    StyledWrapper,
    WalletHideWrapper,
    WalletIcon,
} from "./index.styles"
import { WalletSelector } from "../../WalletSelector"
import { useTranslation } from "react-i18next"
import { useAccountContext } from "context/account"


export const ConnectWallet = () => {
    const { isWalletSelectorShown, showWalletSelector, account } = useAccountContext()
    const { t } = useTranslation()

    return (
        <WalletHideWrapper>
            <StyledConnectWallet onClick={showWalletSelector}>
                <StyledWalletTextWrapper>
                    <StyledWrapper>{account ? t("wallet-c") : t("wallet-n")}</StyledWrapper>
                    {account && (
                        <StyledAddress>
                            {account.slice(0, 4) + "…" + account.slice(37, 42)}
                        </StyledAddress>
                    )}
                </StyledWalletTextWrapper>
                <WalletIcon src="/assets/icons/wallet.svg" />
            </StyledConnectWallet>
            {isWalletSelectorShown && (
                <WalletSelector />
            )}
        </WalletHideWrapper>
    )
}
