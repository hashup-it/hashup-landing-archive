import styled from "styled-components"
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

export const StyledCartridgesBox = styled.div`
    display: flex;
    width: 100%;
    height: 350px;
    margin: 110px auto;
    position: relative;
    align-items: center;
    justify-content: center;

    ${MediaQuery.tablet} {
        margin-top: 60px;
        margin-bottom: 20px;
    }

    div.gold-glow {
        z-index: 99;
        width: 440px;
        height: 225px;
        background-color: #edee87;
        filter: blur(66px);

        ${MediaQuery.tablet} {
            width: 75%;
            height: 130px;
            opacity: 0.8;
        }
    }
`

export const StyledCartridgeImgWrapper = styled.div`
    display: block;
    position: absolute;

    // ========== 1st level ==========
    &.gold {
        width: 630px;
        z-index: 100;

        ${MediaQuery.tablet} {
            width: 460px;
        }

        ${MediaQuery.mobileL} {
            width: 120%;
        }
    }

    // ========== 2nd level ==========
    &.red,
    &.gray {
        opacity: 0.5;
        width: 420px;

        ${MediaQuery.tablet} {
            width: 320px;
        }

        ${MediaQuery.mobileL} {
            display: none;
        }
    }
    &.red {
        transform: translateX(-330px);

        ${MediaQuery.tablet} {
            transform: translateX(-240px);
        }
    }
    &.gray {
        transform: translateX(330px);

        ${MediaQuery.tablet} {
            transform: translateX(240px);
        }
    }

    // ========== 3rd level ===========
    &.blue,
    &.green {
        opacity: 0.17;
        z-index: 1;
        width: 305px;

        ${MediaQuery.tablet} {
            display: none;
        }
    }
    &.blue {
        transform: translateX(-665px);
    }
    &.green {
        transform: translateX(665px);
    }
`

export const StyledAnchor = styled.div`
    position: absolute;
    top: 200px;
`
