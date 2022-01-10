import {
    StyledAddress,
    StyledConnectWallet,
    StyledWalletTextWrapper,
    StyledWrapper,
    WalletIconWrapper,
} from "./index.styles"
import { WalletSelector } from "../../WalletSelector"
import { useTranslation } from "react-i18next"
import { useAccountContext } from "contexts/account"
import Image from "next/image"

import walletSvg from "/public/assets/icons/wallet.svg"

export const ConnectWallet = () => {
    const { isWalletSelectorShown, showWalletSelector, account } = useAccountContext()
    const { t } = useTranslation()

    return (
        <>
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

                <WalletIconWrapper>
                    <Image src={walletSvg} alt="Wallet icon" priority />
                </WalletIconWrapper>
            </StyledConnectWallet>
            {isWalletSelectorShown && <WalletSelector />}
        </>
    )
}
