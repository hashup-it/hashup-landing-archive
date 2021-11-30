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
import { assetsUrl } from "config"

export const ConnectWallet = () => {
    const { isWalletSelectorShown, showWalletSelector, account } = useAccountContext()
    const { t } = useTranslation()

    return (
        <WalletHideWrapper>
            <StyledConnectWallet onClick={showWalletSelector}>
                <StyledWalletTextWrapper>
                    <StyledWrapper>
                        {account ? t(`menu.wallet-connected`) : t(`menu.wallet-not-connected`)}
                    </StyledWrapper>
                    {account && (
                        <StyledAddress>
                            {account.slice(0, 4) + "…" + account.slice(37, 42)}
                        </StyledAddress>
                    )}
                </StyledWalletTextWrapper>
                <WalletIcon src={assetsUrl("icons/wallet.svg")} />
            </StyledConnectWallet>
            {isWalletSelectorShown && <WalletSelector />}
        </WalletHideWrapper>
    )
}
