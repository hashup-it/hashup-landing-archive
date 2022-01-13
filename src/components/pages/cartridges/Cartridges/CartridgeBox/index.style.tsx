import styled, { css } from "styled-components"
import { MediaQuery } from "__styles__/consts"
import { CartridgeColor } from "config"

export const StyledCartridgeBox = styled.div<{ leftBasedLayout: boolean }>`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    ${props =>
        props.leftBasedLayout &&
        css`
            flex-direction: row-reverse;
        `}

    ${MediaQuery.laptop} {
        flex-direction: column;
    }

    div.anchor {
        position: absolute;
        top: -112px;
    }

    div.description-box {
        position: relative;
        z-index: 99;
        width: 50%;
        height: 100%;

        ${MediaQuery.laptop} {
            width: 100%;
        }
    }

    div.image-box {
        position: relative;
        z-index: 0;
        width: 50%;
        height: 100%;

        ${MediaQuery.laptop} {
            width: 100%;
            margin-top: -30px;
        }
    }
`

export const StyledDescriptionBox = styled.div<{ leftBasedLayout: boolean }>`
    width: 480px;
    margin: auto;

    ${MediaQuery.laptop} {
        width: 420px;
    }

    ${MediaQuery.mobileL} {
        width: 100%;
    }

    h2 {
        text-align: left;
        margin-bottom: 25px;
        font-size: 40px;

        ${MediaQuery.mobileL} {
            font-size: 35px;
        }
    }

    div.label {
        font-size: 18px;
        line-height: 160%;
        color: #cdcdcd;
    }
`

export const StyledForInfo = styled.div`
    border-radius: 10px;
    margin-top: 30px;
    position: relative;
    transform-style: preserve-3d;
    background: #161616;
    padding: 15px 20px;

    div.label {
        font-size: 12px;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        color: #9d9d9d;
    }

    div.content {
        margin-top: 3px;
        font-size: 18px;
        line-height: 160%;
    }

    // Border gradient
    :before {
        content: "";
        transform: translateZ(-1px);
        position: absolute;
        display: block;
        top: -1px;
        left: 0;
        border-radius: 10px;
        width: calc(100% + 1px);
        height: calc(100% + 2px);
        background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #989898 85%);
    }
`

export const StyledBulletList = styled.ul<{ markerSrc: string }>`
    margin: 35px 0 25px 25px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 16px;
    line-height: 160%;

    li {
        padding-left: 18px;
    }

    li::marker {
        content: url(${props => props.markerSrc});
        width: 6px;
        height: 6px;
    }
`

export const StyledImageBox = styled.div<{ color: CartridgeColor }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    div.img-wrapper {
        flex-shrink: 0;
        width: 500px;
        position: relative;
        z-index: 99;

        ${MediaQuery.laptop} {
            width: 500px;
        }

        ${MediaQuery.mobileL} {
            width: 120%;
        }
    }

    div.flare {
        background-color: ${props => props.color};
        width: 600px;
        height: 600px;
        opacity: 0.2;
        border-radius: 100%;
        top: 50%;
        transform: translateY(-50%);
        filter: blur(520px);
        position: absolute;
        z-index: 0;
    }
`
