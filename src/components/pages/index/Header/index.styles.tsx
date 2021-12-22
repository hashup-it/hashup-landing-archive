import { GLOBAL_CONTENT_WIDTH } from "__styles__/consts"
import { assetsUrl } from "config"
import styled from "styled-components"
import { Swatches } from "__styles__/consts"
import { MediaQuery } from "__styles__/consts"

const minHeight: string = "900px"

export const StyledInnerContainer = styled.div`
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    position: relative;
    z-index: 999;
    min-height: ${minHeight};

    ${MediaQuery.laptopM} {
        height: auto;
    }

    ${MediaQuery.tablet} {
        padding-bottom: 45px;
    }
`

export const StyledContentBox = styled.div`
    padding-top: 120px;
`

export const StyledBackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    min-height: ${minHeight};
    position: absolute;
    overflow-y: hidden;
    top: 0;
    background-color: black;
    left: 0;
    z-index: 0;

    ${MediaQuery.laptopM} {
        display: none;
    }
`

export const StyledBackgroundPlaceholderImg = styled.div<{ isVisible: boolean }>`
    opacity: ${props => (props.isVisible ? 1 : 0)};
    width: 100%;
    height: 100%;
    min-height: ${minHeight};
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    z-index: 2;
    transition: opacity 500ms ease;
`

export const StyledVideoBackground = styled.video<{ isLoaded: boolean }>`
    opacity: ${props => (props.isLoaded ? 1 : 0)};
    width: 100%;
    min-height: ${minHeight};
    z-index: 1;
`

export const StyledBackgroundFlare = styled.div`
    display: none;

    ${MediaQuery.laptopM} {
        display: block;
        position: absolute;
        pointer-events: none;
        top: 65px;
        left: 0;
        width: 700px;
        height: 900px;
        background-color: ${Swatches.primary_color};
        opacity: 0.08;
        border-radius: 600px;
        filter: blur(130px);
        transform: rotate(30deg) translateZ(-100px);
    }
`
