import styled from "styled-components"
import { Swatches } from "__styles__/Swatches"
import { hexToRGB } from "../../util/math"
import { mediaQuery } from "components/MediaQuery"
import { globalHorizontalPadding } from "App.styles"

export const StyledComparison = styled.div`
    margin-top: 150px;
    margin-bottom: 250px;
    position: relative;
    display: grid;
    column-gap: 140px;
    row-gap: 28px;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 280px 280px 280px;
    z-index: initial;
    overflow-x: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ${mediaQuery.mobileL} {
        column-gap: 25px;
        row-gap: 22px;
        width: 100vw;
        padding-left: 20px;
        margin-left: -${globalHorizontalPadding[mediaQuery.mobileL]};
        margin-bottom: 80px;
    }
`

export const StyledComparisonText = styled.div`
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: white;
    padding-bottom: 40px;
`

export const ComparisonItem = styled.div<{ outlineColor: string }>`
    background: linear-gradient(
        90deg,
        ${props => hexToRGB(props.outlineColor, 0)} 35%,
        ${props => props.outlineColor} 100%
    );
    padding: 1px;
    display: grid;
    border-radius: 13px;
    position: relative;
    width: 290px;

    ${mediaQuery.tablet} {
        width: 232px;
    }
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

export const StyledPro = styled.li`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 180%;
    margin-top: 4.5px;
    position: relative;
    padding-left: 30px;

    :before {
        content: "#";
        position: absolute;
        color: ${Swatches.primary_color};
        margin-right: 27px;
        font-size: 17px;
        margin-left: -26px;
    }
`

export const StyledCon = styled.li`
    font-style: normal;
    font-weight: bold;
    font-style: normal;
    font-weight: normal;
    margin-top: 4.5px;
    position: relative;
    padding-left: 30px;
    color: #cdcdcd;

    :before {
        content: "";
        position: absolute;
        height: 5px;
        width: 5px;
        margin-bottom: 1.5px;
        background-color: #cdcdcd;
        margin-left: -24px;
        margin-top: 10px;
    }
`

export const StyledPlus = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    color: white;
    position: absolute;
    left: -60px;
    top: 0;
    display: flex;
    align-items: center;
    bottom: 0;
    margin: auto;

    ${mediaQuery.mobileL} {
        left: -30px;
    }
`

export const LineText = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    grid-column: 3;
    color: ${props => props.color};
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.5em;
    width: 100%;
    /* background-color: red; */
    text-transform: uppercase;
    position: relative;

    :after {
        content: "";
        position: absolute;
        width: calc(100% - 80px);
        background: linear-gradient(
            90deg,
            ${props => hexToRGB(props.color, 0.3)} 50%,
            ${props => hexToRGB(props.color, 0)} 100%
        );
        height: 3px;
        display: block;
        left: 110px;
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    grid-column: span 3;
`
