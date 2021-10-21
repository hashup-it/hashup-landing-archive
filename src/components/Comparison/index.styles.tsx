import styled from "styled-components";
import { Swatches } from "../Swatches";

export const StyledComparison = styled.div`
    margin-top: 0px;
    margin-bottom: 250px;
    position: relative;
    display: grid;
    column-gap: 140px;
    row-gap: 88px;
    grid-template-rows: auto auto auto;
    grid-template-columns: repeat(3, 280px);
    z-index: initial;
`;

export const StyledComparisonText = styled.div`
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: white;
`;

export const ComparisonItem = styled.div<({outlineColor: string})>`
   background: linear-gradient(90deg, ${Swatches.background_main} 35%, ${props => props.outlineColor} 100%);
   padding: 1px;
   display: grid;
   border-radius: 13.0133px;
`;

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
`;

export const StyledPro = styled.li`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 180%;
 
    
    &::before {
        content: '#';
        color: ${Swatches.primary_color};
        margin-right: 20px;
    }

`

export const StyledCon = styled.li`
    font-style: normal;
    font-weight: bold;
    font-style: normal;
    font-weight: normal;


    color: #CDCDCD;
 
    
    &::before {
        content: '';
        display: inline-block;
        height: 5px;
        width: 5px;
        margin-bottom: 1.5px;
        background-color: #CDCDCD;
        margin-right: 20px;
    }

`