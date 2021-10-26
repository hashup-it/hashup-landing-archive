import styled from 'styled-components'
import { mediaQuery } from '../../MediaQuery'

export const StyledConnectWallet = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-right: 10px;

`

export const StyledWalletTextWrapper = styled.div`
    display: grid;
    align-items: flex-start;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
`

export const StyledWrapper = styled.div``

export const StyledAddress = styled.div`
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
`

export const WalletHideWrapper = styled.div`
    ${mediaQuery.mobileM} {
        display: none;
    }
`

export const WalletIcon = styled.img`

    margin-top: -3px;
`
