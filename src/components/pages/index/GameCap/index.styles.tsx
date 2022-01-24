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
    &.red-dots-1 {
        will-change: opacity, transform;
        transition: transform 25ms ease, opacity 25ms ease;
        width: 100%;
        pointer-events: none;
        user-select: none;
        position: absolute;
        bottom: -14%;
        right: 25%;
        z-index: 999;

        ${MediaQuery.laptopL} {
            position: absolute;
            left: -18%;
            width: 90%;
            bottom: -15%;
            z-index: 99;
        }
    }
`
