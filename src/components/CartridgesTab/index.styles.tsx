import styled from 'styled-components'
import { SmallHeaderText, TabHeader } from '../Shared/sections.styles'

export const CartridgesTabContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 150px;
    padding-bottom: 150px;
`

export const CartridgesHeaderContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 40px;

    padding: 0 145px;
`

export const SmallCartridgeHeaderText = styled(SmallHeaderText)`
    white-space: pre-line;

    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;

    text-align: center;

    color: #E0E0E0;
`

export const CartridgesTabHeader = styled(TabHeader)`
    font-family: Sora;
    font-style: normal;
    font-weight: 600;
    font-size: 59px;
    line-height: 115%;

    text-align: center;
`

export const CartridgeThumbnailsContainer = styled.div`
    display: flex;
    gap: 25px;
`

export const CartridgeThumbnail = styled.a<({source: string})>`
    cursor: pointer;
    background: url('${props => props.source}');
    width: 152px;
    height: 103px;
`
