import styled from "styled-components"

export const StyledConnectWallet = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-right: 10px;
    justify-content: right;
    cursor: pointer;
    transition: opacity 100ms ease;

    :hover {
        transition: opacity 100ms ease;
        opacity: 0.8;
    }
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

export const WalletIcon = styled.img`
    margin-top: -3px;
`
