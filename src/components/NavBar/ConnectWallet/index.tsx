import {
    StyledAddress,
    StyledConnectWallet,
    StyledWalletTextWrapper,
    StyledWrapper,
    WalletHideWrapper,
    WalletIcon
} from './index.styles'
import { FunctionComponent } from 'react'
import { WalletSelector } from '../../WalletSelector'

interface ConnectWalletProps {
    account: string | any,
    handleMetamaskConnection: Function,
    isWalletSelectorShown: boolean,
    setIsWalletSelectorShown: Function
}

export const ConnectWallet: FunctionComponent<ConnectWalletProps> = (
    {
        handleMetamaskConnection,
        account,
        isWalletSelectorShown,
        setIsWalletSelectorShown
    }
) => (
    <WalletHideWrapper>
        <StyledConnectWallet onClick={() => setIsWalletSelectorShown(true)}>
            <StyledWalletTextWrapper>
                <StyledWrapper>{account ? 'Connected' : 'Connect Wallet'}</StyledWrapper>
                {account && <StyledAddress>{account.slice(0, 4) + '...' + account.slice(37, 42)}</StyledAddress>}
            </StyledWalletTextWrapper>
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
