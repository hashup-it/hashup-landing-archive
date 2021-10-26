import styled from 'styled-components'
import { Swatches } from '../../__styles__/Swatches'
import { hexToRGB } from '../../util/math'

const comparisonItemWidth = 240

export const StyledComparison = styled.div`
    margin-top: 0px;
    margin-bottom: 250px;
    position: relative;
    display: grid;
    column-gap: 140px;
    row-gap: 28px;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 280px 280px 280px;
    z-index: initial;
    overflow-x: auto;
    margin-top: 150px;

    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`

export const StyledComparisonText = styled.div`
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: white;
    padding-bottom: 40px;
`

export const ComparisonItem = styled.div<({ outlineColor: string })>`
    background: linear-gradient(90deg, ${props => hexToRGB(props.outlineColor, 0)} 35%, ${props => props.outlineColor} 100%);
    padding: 1px;
    display: grid;
    border-radius: 13.0133px;
    position: relative;

`

export const ComparisonItemContent = styled.ul`
    margin: 0;
    padding: 0;
    padding: 35px 22px 35px 22px;

    background: ${Swatches.background_main};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: inherit;
    position: relative;
    list-style-type: none;
    font-size: 14px;
    line-height: 180%;
`

export const StyledLineColumn = styled.div`
    background-color: blue;
    grid-row: span 3;
`

export const StyledPro = styled.li`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 180%;
    margin-top: 4.5px;

    &::before {
        content: '#';
        color: ${Swatches.primary_color};
        margin-right: 27px;
        font-size: 17px;
    }

`

export const StyledCon = styled.li`
    font-style: normal;
    font-weight: bold;
    font-style: normal;
    font-weight: normal;
    margin-top: 4.5px;

    color: #CDCDCD;


    &::before {
        content: '';
        display: inline-block;
        height: 5px;
        width: 5px;
        margin-bottom: 1.5px;
        background-color: #CDCDCD;
        margin-right: 27px;
    }

`

export const StyledPlus = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    color: white;
    position: absolute;
    left: -70px;
    top: 0;
    display: flex;
    align-items: center;
    bottom: 0;
    margin: auto;

`

export const LineText = styled.div<({ color: string })>`

    display: flex;
    align-items: center;
    grid-column: span 3;
    left: 0;
    color: ${props => props.color};
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.5em;

    text-transform: uppercase;
    position: sticky;


    ::after {
        content: '';
        width: 60vw;
        background: linear-gradient(90deg, ${props => hexToRGB(props.color, 0.3)} 50%, ${props => hexToRGB(props.color, 0)} 100%);
        height: 4px;
        margin-left: 33px;
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    grid-column: span 3;
`
