import styled, { css } from 'styled-components'
import { ComparisonItem, ComparisonItemContent } from '../../Comparison/index.styles'
import { SectionLabel, SectionList, SmallHeaderText } from '../../Shared/sections.styles'
import { mediaQuery } from '../../MediaQuery'

export const CartridgeDescriptionContainer = styled.div<({ leftBasedLayout: boolean })>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    ${props => props.leftBasedLayout ?
            css`
                grid-template-areas: 'text image';
            ` :
            css`
                grid-template-areas: 'image text';
            `
    };
    gap: 145px;

    position: relative;

    ${mediaQuery.mobileL} {
        display: flex;
        flex-direction: column;
        gap: 0;
    }
`

export const CartridgeDescriptionText = styled.div`
    grid-area: text;

    display: flex;
    flex-direction: column;
`

export const CartridgeDescriptionSmallText = styled(SmallHeaderText)`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;

    color: #CDCDCD;`

export const CartridgeDescriptionImage = styled.div`
    grid-area: image;
    height: 100%;

    display: flex;
`

export const CartridgeTargetItem = styled(ComparisonItem)`
    margin-top: 2rem;
`

export const CartridgeTargetItemContent = styled(ComparisonItemContent)`
    padding: 15px 20px;
    background: #161616;
`

export const CartridgeTargetLabel = styled(SectionLabel)`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 160%;

    letter-spacing: 0.11em;

    color: #9D9D9D;
`

export const CartridgeTargetContent = styled.div`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;

    color: #FFFFFF;
`

export const CartridgeDescriptionList = styled(SectionList)`
    margin-left: 20px;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

export const CartridgeHook = styled.div`
    position: absolute;
    top: -112px;
`
