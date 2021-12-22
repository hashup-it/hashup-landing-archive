import { MediaQuery } from "__styles__/consts"
import styled from "styled-components"
import { hexToRGB } from "util/math"
import { Swatches } from "__styles__/consts"

export const StyledAirdropPopupWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    cursor: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 999;
`

export const StyledPopupWindowWrapper = styled.div`
    background: linear-gradient(
        90deg,
        ${props => hexToRGB(Swatches.primary_color, 0)} 35%,
        ${props => Swatches.primary_color} 100%
    );
    padding: 1px;
    display: grid;
    border-radius: 13.0133px;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13.0133px;

    ${MediaQuery.tablet} {
        margin: 10px;
    }
`

export const StyledPopupWindow = styled.div`
    background: rgba(22, 22, 22, 1);
    border-radius: inherit;
    padding: 28px 36px;
    color: white;
    position: relative;
`

export const StyledPopupHeader = styled.div`
    font-weight: normal;
    font-size: 30px;
    line-height: 140%;
    text-align: center;
    color: #ffffff;
`

export const StyledPopupText = styled.p`
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    color: #cdcdcd;
`

export const StyledTelegramContainer = styled.div`
    border-top: 1px solid #21242b;
    padding-top: 50px;
    padding-bottom: 25px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    align-items: center;
    justify-content: flex-start;

    ${MediaQuery.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const StyledTelegramHeader = styled.h4`
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
`

export const StyledClose = styled.img`
    position: absolute;
    right: 21px;
    top: 21px;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`

export const StyledTelegramLink = styled.div`
    display: grid;
    gap: 20px;
    height: 45px;
    grid-template-columns: 45px auto;
    align-items: center;
`

export const StyledTelegramIconWrapper = styled.div`
    background-color: red;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(
        180deg,
        ${hexToRGB(Swatches.primary_color, 0.2)} 0%,
        rgba(255, 63, 63, 0) 100%
    );

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    :hover {
        background: linear-gradient(
            180deg,
            ${hexToRGB(Swatches.primary_color, 0.4)} 0%,
            rgba(255, 63, 63, 0) 100%
        );
    }

    :before {
        @-moz-keyframes spin {
            from {
                -moz-transform: rotate(0deg) skewX(0deg);
            }
            to {
                -moz-transform: rotate(360deg) skewX(0deg);
            }
        }
        @-webkit-keyframes spin {
            from {
                -webkit-transform: rotate(0deg) skewX(0deg);
            }
            to {
                -webkit-transform: rotate(360deg) skewX(0deg);
            }
        }
        @keyframes spin {
            from {
                transform: rotate(0deg) skewX(0deg);
            }
            to {
                transform: rotate(360deg) skewX(0deg);
            }
        }

        content: "";
        width: 100%;
        height: 100%;
        border-left: 2px solid red;

        position: absolute;
        border-radius: 50%;

        animation: spin;

        -webkit-animation-name: spin;
        -webkit-animation-duration: 4000ms;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        -moz-animation-name: spin;
        -moz-animation-duration: 4000ms;
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: linear;
        -ms-animation-name: spin;
        -ms-animation-duration: 4000ms;
        -ms-animation-iteration-count: infinite;
        -ms-animation-timing-function: linear;

        animation-name: spin;
        animation-duration: 4000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`

export const StyledTelegramText = styled.div`
    font-weight: normal;
    font-size: 12px;
`

export const StyledMediaIcon = styled.img``

export const StyledAddToMetamaskGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 12px;
    color: ${Swatches.text_secondary};
`
