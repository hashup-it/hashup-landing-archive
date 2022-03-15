import styled from "styled-components"
import { maxHeight, MediaQuery } from "__styles__/consts"

export const StyledBackgroundContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 0;
`

export const StyledVideoBackground = styled.video<{ isLoaded: boolean; opacity: number }>`
    z-index: 1;
    opacity: ${p => (p.isLoaded ? p.opacity : 0)};
    transition: opacity 500ms ease;

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

    ${MediaQuery.tablet} {
        display: none;
    }
`

export const StyledBackgroundImgWrapper = styled.div`
    z-index: 9999;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    background-color: red;

    /* ${MediaQuery.laptop} {
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
    } */
`
