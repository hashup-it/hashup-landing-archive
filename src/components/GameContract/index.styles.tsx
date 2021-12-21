import styled, { keyframes } from "styled-components"
import { Swatches } from "__styles__/Swatches"

export const StyledBackgroundFlare = styled.div`
    filter: blur(500px);
    width: 500px;
    height: 500px;
    border-radius: 100px;
    background-color: ${Swatches.primary_color};
    position: absolute;
    z-index: 0;
    transform: translate(-140px, -100px);
    opacity: 0.08;
`

export const StyledButtonBox = styled.div`
    margin-top: 20px;
`

export const StyledAnchor = styled.div`
    position: absolute;
    top: 200px;
`

const levitationAnim = keyframes`
    0% {
        transform: translateY(-10px);
    }

    50% {
        transform: translateY(25px);
    }

    100% {
        transform: translateY(-10px);
    }
`

export const StyledImagesBox = styled.div`
    margin-top: 100px;
    position: relative;

    img.laptop {
        margin-top: 200px;
        margin-left: -400px;
        position: relative;
        z-index: 1;
    }
    img.floating-website {
        position: absolute;
        top: 15px;
        right: -315px;
        z-index: 99;
        animation: ${levitationAnim} 4.5s ease-in-out infinite;
    }
`
