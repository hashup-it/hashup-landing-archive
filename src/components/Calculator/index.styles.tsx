import styled from 'styled-components'
import { Swatches } from '../../__styles__/Swatches'

export const StyledCalculator = styled.div`
    min-height: 70vh;
    position: relative;
    margin-top: 76px;
    padding: 0px 117px 0px 117px;
    z-index: 0;
    margin-bottom: 100px;
`

export const PercentBackground = styled.img`
    position: absolute;
    pointer-events: none;
    top: -10vh;
    right: 0px;
`

export const CalculatorHeader = styled.h2`
    font-weight: normal;
    font-size: 28px;
    line-height: 150%;
    max-width: 50vw;
`

export const StyledSlidersContainer = styled.div`
    margin: 100px 0px 100px 0px;
    display: flex;
    flex-direction: column;
    gap: 60px;
`

export const StyledResults = styled.div`

    display: flex;
    gap: 30px;
    align-items: center;
`

export const StyledResultsDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 120px;
`

export const StyledResultsHeader = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    padding: 0;
    margin: 0;
`

export const StyledResultsText = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 140%;
    max-width: 120px;
`

export const StyledPriceLabel = styled.div`
    padding: 20px 40px 20px 40px;
    background: #161616;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13.0133px;
    position: relative;
    z-index: initial;

`

export const StyledPriceLabelOutline = styled.div<({ outlineColor: string })>`
    position: absolute;
    width: 100%;
    height: 100%;

    border-radius: inherit;
    padding: 1px;
    z-index: -1;
    top: -1px;
    left: -1px;
    background: rgb(22, 22, 22);
    background: linear-gradient(90deg, rgba(22, 22, 22, 1) 43%, ${props => props.outlineColor} 100%);
`

export const StyledResultWrapper = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
`

export const StyledVersus = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 13px;
    line-height: 15px;
    align-items: center;
`

export const StyledVersusLine = styled.div`
    background: ${Swatches.primary_color};
    width: 1.3px;
    height: 32px;
`

