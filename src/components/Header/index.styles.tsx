import { globalContentWidth } from "App.styles"
import styled from "styled-components"
import { Swatches } from "__styles__/Swatches"
import { mediaQuery } from "../MediaQuery"

export const StyledContainer = styled.div`
    max-height: 100vh;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    position: relative;
    width: 100vw;
    left: calc(-50vw + 50%);
    background-color: black;

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

export const StyledContentBox = styled.div`
    width: ${globalContentWidth}px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    padding-top: 140px;
    z-index: 9;
`

export const StyledBackgroundPlaceholderImg = styled.div<{ isVisible: boolean }>`
    opacity: ${props => (props.isVisible ? 1 : 0)};
    width: 100vw;
    height: 100vh;
    width: 100vw;
    left: calc(-50vw + 50%);
    background-color: #b10000;
    position: absolute;
    z-index: 0;
    transition: opacity 600ms ease;
`

export const StyledVideoBackground = styled.video<{ isLoaded: boolean }>`
    /* opacity: ${props => (props.isLoaded ? 1 : 0)}; */
    width: 100vw;
`
