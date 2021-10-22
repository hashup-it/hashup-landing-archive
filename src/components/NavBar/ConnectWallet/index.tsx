import { StyledConnectWallet, WalletHideWrapper, WalletIcon } from './index.styles'
import { useEffect, useState } from 'react'
import { WalletSelector } from '../../WalletSelector'

export const ConnectWallet = ({handleMetamaskConnection} : {handleMetamaskConnection: Function}) => {
    const [isWalletSelectorShown, setIsWalletSelectorShown] = useState(false)

    return (
        <WalletHideWrapper>
            <StyledConnectWallet onClick={() => setIsWalletSelectorShown(true)}>
                Connect Wallet
                <WalletIcon src="/assets/icons/wallet.svg" />
            </StyledConnectWallet>
            {
                isWalletSelectorShown &&
                <WalletSelector
                    setIsWalletSelectorShown={setIsWalletSelectorShown}
                    handleMetamaskConnection={handleMetamaskConnection}
                />
            }
        </WalletHideWrapper>

    )
}
