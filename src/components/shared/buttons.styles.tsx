import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledButton1 = styled.button`
    // Transparent background, red border, border radius

    margin: 0;
    box-sizing: border-box;
    padding: 16px 35px;
    border: 1px solid ${Swatches.primary_color};
    border-radius: 15px;
    font-size: 16px;
    text-align: center;
    color: white;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: 100ms ease opacity;

    :hover {
        opacity: 0.8;
        transition: 100ms ease opacity;
    }
`

export const StyledButton2 = styled(StyledButton1)`
    min-width: 240px;
    background-color: ${Swatches.primary_color} !important;
    box-shadow: 0px 8px 40px -10px rgba(255, 0, 0, 1);

    :hover {
        opacity: 0.9;
        transition: opacity 100ms ease;
    }

    /* ${MediaQuery.tablet} { */
        /* width: 240px; */
    /* } */
/*  */
    /* ${MediaQuery.mobileL} { */
        /* flex: 1; */
        /* width: 280px; */
    }
`
