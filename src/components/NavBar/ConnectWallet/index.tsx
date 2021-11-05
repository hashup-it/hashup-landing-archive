import {
    StyledAddress,
    StyledConnectWallet,
    StyledWalletTextWrapper,
    StyledWrapper,
    WalletHideWrapper,
    WalletIcon,
} from "./index.styles"
import { FunctionComponent } from "react"
import { WalletSelector } from "../../WalletSelector"
import { useTranslation } from "react-i18next"

interface ConnectWalletProps {
    account: string | any
    handleMetamaskConnection: Function
    isWalletSelectorShown: boolean
    setIsWalletSelectorShown: Function
}

export const ConnectWallet: FunctionComponent<ConnectWalletProps> = ({
    handleMetamaskConnection,
    account,
    isWalletSelectorShown,
    setIsWalletSelectorShown,
}) => {
    const { t } = useTranslation()

    return (
        <WalletHideWrapper>
            <StyledConnectWallet onClick={() => setIsWalletSelectorShown(true)}>
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
                <WalletSelector
                    setIsWalletSelectorShown={setIsWalletSelectorShown}
                    handleMetamaskConnection={handleMetamaskConnection}
                />
            )}
        </WalletHideWrapper>
    )
}
