import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledImagesBox = styled.div`
    text-align: right;
    position: relative;

    div.flare {
        background-color: ${Swatches.primary_color};
        width: 400px;
        height: 400px;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: -20px;
        filter: blur(250px);
        z-index: 1;
        opacity: 0.1;
    }
`

export const StyledImgWrapper = styled.div`
    pointer-events: none;
    user-select: none;
    position: absolute;
    width: 100%;

    &.red-dots-2 {
        will-change: opacity;
        transition: opacity 25ms ease;
        bottom: -100px;
        right: -250px;

        ${MediaQuery.laptopM} {
            width: 100%;
            bottom: 8%;
            right: 10%;
        }

        ${MediaQuery.tablet} {
            width: 110%;
            transform: translate(0);
            bottom: -12%;
            left: -40%;
        }
    }

    &.red-dots-1 {
        will-change: transform, opacity;
        transition: transform 25ms ease, opacity 25ms ease;
        top: -100px;
        left: -300px;
        z-index: 999;
        width: 95%;

        ${MediaQuery.laptopM} {
            width: 85%;
            left: -35%;
            top: -15%;
        }

        ${MediaQuery.tablet} {
            z-index: 0;
            top: -11%;
            left: auto;
            right: -20%;
        }
    }
`
