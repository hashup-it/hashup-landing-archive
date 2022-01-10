import { assetsUrl } from "config"
import styled, { keyframes } from "styled-components"

const spinnerAnim = keyframes`
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(360deg) scale(0.7);
    }
    100% {
        transform: rotate(720deg) scale(1);
    }
`

export const StyledLoadingSpinner = styled.div`
    width: 120px;
    height: 120px;
    background-image: url(${() => assetsUrl("brand/logo-icon.svg")});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    animation: ${spinnerAnim} 4s infinite;
`
