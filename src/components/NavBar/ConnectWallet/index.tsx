import { StyledAddress, StyledConnectWallet, StyledWalletTextWrapper, StyledWrapper, WalletHideWrapper, WalletIcon } from './index.styles'
import { FunctionComponent, useEffect, useState } from 'react'
import { WalletSelector } from '../../WalletSelector'

interface ConnectWalletProps{
    account: string | any,
    handleMetamaskConnection: Function
}
export const ConnectWallet :FunctionComponent<ConnectWalletProps> = ({handleMetamaskConnection, account}) => {
    const [isWalletSelectorShown, setIsWalletSelectorShown] = useState(false)
    

    return (
        <WalletHideWrapper>
            <StyledConnectWallet onClick={() => setIsWalletSelectorShown(true)}>
                <StyledWalletTextWrapper>
                    <StyledWrapper>{account ? 'Connected' : 'Connect Wallet' }</StyledWrapper>
                    { account && <StyledAddress>{account.slice(0,4) + '...' + account.slice(37,42)}</StyledAddress> }
                </StyledWalletTextWrapper>
                <WalletIcon src="/assets/icons/wallet.svg"/>
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
