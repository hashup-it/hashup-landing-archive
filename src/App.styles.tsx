import styled from "styled-components"
import { mediaQuery } from "./components/MediaQuery"
import { Swatches } from "./__styles__/Swatches"

export const globalHorizontalPadding = {
    [mediaQuery.desktop]: "93px",
    [mediaQuery.laptop]: "45px",
    [mediaQuery.laptopL]: "60px",
    [mediaQuery.tablet]: "60px",
    [mediaQuery.mobileL]: "23px",
}

export const StyledLandingContainer = styled.div`
    background-color: ${Swatches.background_main};
    min-height: 100vh;
    color: white;
    margin: 0 auto;

    overflow: visible;
    width: 1240px;
    padding: 0px ${globalHorizontalPadding[mediaQuery.desktop]};

    ${mediaQuery.laptop} {
        width: auto;
        padding: 0px ${globalHorizontalPadding[mediaQuery.laptop]};
        overflow: hidden;
    }

    ${mediaQuery.laptopL} {
        width: auto;
        padding: 0px ${globalHorizontalPadding[mediaQuery.laptopL]};
    }

    ${mediaQuery.mobileL} {
        padding: 0px ${globalHorizontalPadding[mediaQuery.mobileL]};
    }
`
