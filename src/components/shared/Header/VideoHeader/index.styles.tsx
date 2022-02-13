import styled from "styled-components"
import { GLOBAL_CONTENT_WIDTH_PX, MediaQuery } from "__styles__/consts"

const minHeight: string = "900px"

export const StyledContainer = styled.div`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    left: calc(-50vw + 50%);
    background-color: black;
`

export const StyledInnerContainer = styled.div`
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    position: relative;
    z-index: 999;
    margin: auto;
    width: ${GLOBAL_CONTENT_WIDTH_PX}px;

    ${MediaQuery.laptopL} {
        padding-left: 150px;
    }

    ${MediaQuery.laptopM} {
        height: auto;
    }

    ${MediaQuery.laptop} {
        padding-left: 100px;
        width: calc(100vw - 30px);
        left: calc(-50vw + 50%);
        position: relative;
        padding: 0 15px;
        background-color: black;
    }

    ${MediaQuery.tablet} {
        padding-left: 0;
    }
`

export const StyledContentBox = styled.div`
    position: relative;
    z-index: 999;
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
    min-height: 100vh;
    height: 100%;
    /* min-height: ${minHeight}; */
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 0;

    ${MediaQuery.laptop} {
        display: none;
    }
`

export const StyledBackgroundPlaceholder = styled.div<{ isVisible: boolean }>`
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

export const StyledVideoBackground = styled.video<{ opacity: number }>`
    z-index: 1;
    opacity: ${p => p.opacity};

    // https://stackoverflow.com/questions/10797632/simulate-background-sizecover-on-video-or-img
    // Trick to simulate 'background-size: cover;' on 'video' element
    height: 100%;
    width: 177.77777778vh; /* 100 * 16 / 9 */
    min-width: 100%;
    min-height: 56.25vw; /* 100 * 9 / 16 */
    position: absolute;
    left: 50%; /* % of surrounding element */
    top: 50%;
    transform: translate(-50%, -50%);
`

export const StyledBackgroundImgWrapper = styled.div`
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
