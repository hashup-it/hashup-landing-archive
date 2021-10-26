import React from 'react'
import {
    ButtonClose,
    ButtonsContainer,
    ConnectionButton,
    ConnectionHeader,
    ConnectionText,
    ContentWrapper,
    PermanentHyperlink,
    WalletSelectorContainer
} from './index.styles'
import { ColoredText } from '../Shared'

export const WalletSelector = (
    {
        setIsWalletSelectorShown,
        handleMetamaskConnection
    }: { setIsWalletSelectorShown: Function, handleMetamaskConnection: Function }
) => {

    return (
        <WalletSelectorContainer>
            <ContentWrapper>
                <ButtonClose onClick={() => setIsWalletSelectorShown(false)} />
                <ConnectionHeader>Access <ColoredText>your Wallet</ColoredText></ConnectionHeader>
                <ConnectionText>Choose how you wish to access your wallet.</ConnectionText>

                <ButtonsContainer>
                    <ConnectionButton
                        onClick={() => {
                            handleMetamaskConnection()
                            setIsWalletSelectorShown(false)
                        }}
                    >MetaMask <img src="/assets/icons/button-metamask.svg" /></ConnectionButton>
                    <ConnectionButton>Coming soon<img
                        src="/assets/icons/button-wallet-connect.svg" /></ConnectionButton>
                </ButtonsContainer>
            </ContentWrapper>
            <ConnectionText>
                Don’t have a wallet? <PermanentHyperlink href="https://metamask.io/">
                Create one
            </PermanentHyperlink>
            </ConnectionText>
        </WalletSelectorContainer>
    )
}
