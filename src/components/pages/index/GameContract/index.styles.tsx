import styled, { keyframes } from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

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
    margin-top: 40px;
`


export const StyledImagesBox = styled.div`
    margin-top: 100px;
    width: 100%;
    position: relative;

    ${MediaQuery.laptopL} {
        margin-top: 0;
    }

    ${MediaQuery.tablet} {
        margin-top: -30px;
    }

    div.flare {
        position: absolute;
        z-index: 9;
        filter: blur(100px);
        opacity: 0.12;
        background-color: ${Swatches.primary_color};
        width: 300px;
        height: 300px;
        top: 20px;
        left: 32%;

        ${MediaQuery.tablet} {
            opacity: 1;
            top: 20%;
            right: 25%;
            left: auto;
            width: 20%;
            height: 20%;
        }
    }
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

export const StyledImgWrapper = styled.div`
    &.red-dots-1,
    &.red-dots-2 {
        will-change: transform, opacity;
        transition: transform 25ms ease, opacity 25ms ease;
        pointer-events: none;
        user-select: none;
    }

    &.red-dots-1 {
        position: absolute;
        top: 10px;
        left: 5%;
        z-index: 9;

        ${MediaQuery.laptopM} {
            width: 50%;
            left: 15%;
            top: 15%;
        }

        ${MediaQuery.tablet} {
            width: 130%;
            bottom: -4%;
            right: -60%;
            top: auto;
            left: auto;
        }
    }
    &.red-dots-2 {
        position: absolute;
        bottom: 15%;
        left: 50%;
        width: 55%;

        ${MediaQuery.laptopM} {
            width: 55%;
            left: 26%;
            bottom: 8%;
        }

        ${MediaQuery.tablet} {
            display: none;
        }
    }

    &.laptop {
        will-change: transform, opacity;
        transition: transform 25ms ease, opacity 25ms ease;
        margin-top: 160px;
        margin-left: -300px;
        position: relative;
        width: 1400px;
        z-index: 2;

        ${MediaQuery.laptopL} {
            margin-left: 0;
            width: 80%;
        }

        ${MediaQuery.tablet} {
            width: 155%;
            margin-left: -60px;
        }
    }
    &.website {
        will-change: transform, opacity;
        transition: transform 25ms ease, opacity 25ms ease;
        position: absolute;
        top: 15px;
        right: -200px;
        z-index: 99;
        width: 1000px;
        /* animation: ${levitationAnim} 4.5s ease-in-out infinite; */

        ${MediaQuery.laptopL} {
            top: 30px;
            right: 10px;
            width: 60%;
        }

        ${MediaQuery.tablet} {
            animation: none;
            width: 110%;
            top: 5%;
            right: -40%;
        }

        ${MediaQuery.mobileL} {
            top: 12%;
        }
    }
`
