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
        margin-top: 0px;
        margin-bottom: 20px;
    }

    img {
        display: block;
        position: absolute;
    }

    // ========== 1st level ==========
    img.gold {
        width: 630px;
        z-index: 100;

        ${MediaQuery.mobileL} {
            width: 120%;
        }
    }

    div.gold-glow {
        z-index: 99;
        width: 440px;
        height: 225px;
        background-color: #edee87;
        filter: blur(66px);

        ${MediaQuery.mobileL} {
            width: 75%;
            height: 130px;
            opacity: 0.8;
        }
    }

    // ========== 2nd level ==========
    img.red,
    img.gray {
        opacity: 0.5;
        width: 420px;

        ${MediaQuery.mobileL} {
            display: none;
        }
    }
    img.red {
        transform: translateX(-330px);
    }
    img.gray {
        transform: translateX(330px);
    }

    // ========== 3rd level ===========
    img.blue,
    img.green {
        opacity: 0.17;
        z-index: 1;
        width: 305px;

        ${MediaQuery.tablet} {
            display: none;
        }
    }
    img.blue {
        transform: translateX(-665px);
    }
    img.green {
        transform: translateX(665px);
    }
`

export const StyledAnchor = styled.div`
    position: absolute;
    top: 200px;
`
