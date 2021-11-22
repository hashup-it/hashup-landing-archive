import styled from "styled-components"
import { Swatches } from "__styles__/Swatches"
import { mediaQuery } from "../MediaQuery"

export const StyledHeaderContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    position: relative;

    ${mediaQuery.laptop} {
        height: auto;
        margin-top: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ${mediaQuery.mobileL} {
        margin-top: 120px;
    }

    ${mediaQuery.mobileM} {
        padding: 10px;
    }
`

export const StyledBackgroundFlare = styled.div`
    position: absolute;
    pointer-events: none;
    top: 18vh;
    right: -50px;
    width: 700px;
    height: 900px;
    background-color: ${Swatches.primary_color};
    opacity: 0.1;
    border-radius: 600px;
    filter: blur(130px);
    transform: rotate(30deg) translateZ(-100px);
`

export const StyledCartridgeContainer = styled.div`
    display: flex;
    z-index: 2;

    ${mediaQuery.laptop} {
        height: 50vh;
        width: 50vw;
        margin-bottom: 2em;
    }

    ${mediaQuery.tablet} {
        height: 50vw;
        width: 80vw;

        margin-bottom: 0;
    }

    ${mediaQuery.mobileL} {
        height: 50vh;
    }
`
