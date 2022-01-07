import styled from "styled-components"
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

    ${MediaQuery.laptop} {
        width: calc(100vw - 30px);
        left: calc(-50vw + 50%);
        position: relative;
        padding: 0 15px;
    }

    ${MediaQuery.tablet} {
        padding-bottom: 45px;
    }
`

export const StyledContentBox = styled.div`
    position: relative;
    z-index: 99;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${MediaQuery.laptopM} {
        padding-top: 120px;
        display: static;
    }
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

    ${MediaQuery.laptop} {
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
    opacity: 0.45;
`

export const StyledBackgroundImg = styled.img`
    display: none; // Mobile only
    z-index: 0;
    position: absolute;
    opacity: 0.3;

    ${MediaQuery.laptop} {
        display: block;
        width: 115%;
        left: -10%;
        top: 4%;
    }

    ${MediaQuery.tablet} {
        width: 130%;
        left: -15%;
        top: 6%;
    }

    ${MediaQuery.mobileL} {
        opacity: 0.22;
        width: 170%;
        top: 8%;
        left: -50%;
    }
`
