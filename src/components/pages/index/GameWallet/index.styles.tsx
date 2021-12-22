import styled, { keyframes } from "styled-components"
import { Swatches } from "__styles__/consts"

export const StyledAnchor = styled.div`
    position: absolute;
    top: 180px;
`

const levitationAnim = keyframes`
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-25px);
    }

    100% {
        transform: translateY(0);
    }
`

export const StyledImagesBox = styled.div`
    margin-top: -60px;
    position: relative;

    img.tablet {
        display: block;
        left: 0;
        transform: translateX(-100px);
        z-index: 10;
    }

    img.phone {
        display: block;
        position: absolute;
        width: 450px;
        right: -20px;
        bottom: -70px;
        z-index: 30;
        animation: ${levitationAnim} 4.5s ease-in-out infinite;
    }

    img.red-dots {
        display: block;
        pointer-events: none;
        user-select: none;
        position: absolute;
        width: 550px;
        top: 210px;
        right: -40px;
        z-index: 20;
    }

    div.flare {
        position: absolute;
        top: 100px;
        right: 40px;
        width: 300px;
        height: 300px;
        background-color: ${Swatches.primary_color};
        filter: blur(400px);
        opacity: 0.12;
        z-index: 21;
    }
`
