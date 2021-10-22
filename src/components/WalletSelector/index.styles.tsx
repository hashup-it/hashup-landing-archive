import styled from 'styled-components'
import { ButtonOutlined } from '../Shared'
import { Hyperlink, SectionHeader, SectionText } from '../Shared/sections.styles'
import { Swatches } from '../Swatches'

export const WalletSelectorContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    
    cursor: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column;
`

export const ContentWrapper = styled.div`
    position: relative;
    
    background: rgba(22, 22, 22, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13.0133px;

    background: #1B1B1B;
    
    padding: 50px 68px 78px 68px;
    border: 1px solid ${Swatches.primary_color};
    
    cursor: auto;
`

export const ConnectionHeader = styled(SectionHeader)`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 140%;

    text-align: center;

    color: #FFFFFF;
`

export const ConnectionText = styled(SectionText)`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;

    text-align: center;
    
    color: #CDCDCD;

`

export const ConnectionButton = styled(ButtonOutlined)`
    text-transform: none;
    
    display: flex;
    justify-content: space-between;

    align-items: center;

    width: 70%;
    
    :nth-child(2) {
        filter: grayscale(100%);
        opacity: .5;
        cursor: auto;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    
    gap: 10px;
`

export const PermanentHyperlink = styled(Hyperlink)`
    text-decoration: underline;
    color: white;
    font-weight: bold;
`

export const ButtonClose = styled.div`
    position: absolute;
    right: 22px;
    top: 22px;
    
    background: url('/assets/icons/button-close.svg');
    width: 22px;
    height: 22px;

    cursor: pointer;
`
