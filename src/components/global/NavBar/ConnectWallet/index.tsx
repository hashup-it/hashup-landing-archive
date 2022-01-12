import {
    StyledAddress,
    StyledWrapper,
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
            <StyledWrapper onClick={showWalletSelector}>
                <div className="text">
                    {account ? t(`menu.wallet-connected`) : t(`menu.wallet-not-connected`)}
                    {account && (
                        <StyledAddress>
                            {account.slice(0, 4) + "…" + account.slice(37, 42)}
                        </StyledAddress>
                    )}
                </div>
                <div className="icon-wrapper">
                    <Image src={walletSvg} alt="Wallet icon" priority />
                </div>
            </StyledWrapper>
            {isWalletSelectorShown && <WalletSelector />}
        </>
    )
}
