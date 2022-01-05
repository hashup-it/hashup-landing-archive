import styled, { keyframes } from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

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

    ${MediaQuery.tablet} {
        margin-bottom: 250px;
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

        ${MediaQuery.tablet} {
            width: 40%;
            height: 40%;
        }
    }
`

export const StyledImgWrapper = styled.div`
    &.tablet {
        display: block;
        width: 90%;
        left: 0;
        transform: translateX(-100px);
        z-index: 10;

        ${MediaQuery.laptopL} {
            transform: translateX(30px);
            width: 70%;
        }

        ${MediaQuery.tablet} {
            width: 100%;
            transform: translateX(0);
        }
    }

    &.phone {
        display: block;
        position: absolute;
        width: 450px;
        right: -20px;
        bottom: -70px;
        z-index: 30;
        animation: ${levitationAnim} 4.5s ease-in-out infinite;

        ${MediaQuery.laptopL} {
            width: 28%;
            left: calc(50% + 70px);
        }

        ${MediaQuery.tablet} {
            animation: none;
            width: 55%;
            transform: translateX(-8%);
        }
    }

    &.red-dots-1 {
        display: block;
        pointer-events: none;
        user-select: none;
        position: absolute;
        width: 550px;
        top: 210px;
        right: -40px;
        z-index: 20;

        ${MediaQuery.tablet} {
            top: -7%;
            right: -45%;
            width: 90%;
        }
    }
`
