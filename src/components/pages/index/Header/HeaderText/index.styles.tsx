import styled, { css, keyframes } from "styled-components"
import { MediaQuery, minHeight } from "__styles__/consts"
import { Swatches } from "__styles__/consts"
import { assetsUrl } from "config"

export const StyledContainer = styled.div`
    width: 650px;

    ${MediaQuery.laptopL} {
        padding-left: 150px;
    }

    ${MediaQuery.laptop} {
        padding-left: 100px;
    }

    ${MediaQuery.tablet} {
        padding-left: 0;
        width: 100%;
    }

    ${MediaQuery.mobileL} {
        margin-top: 40px;
    }
`

export const StyledLabel = styled.h2`
    font-size: 18px;
    font-weight: 700;
    position: relative;
    display: inline-block;
    margin-left: 12px;

    ${MediaQuery.mobileL} {
        text-align: center;
        width: 180px;
        margin: auto;
        display: block;
        font-size: 14px;
    }

    :before,
    :after {
        content: "";
        position: absolute;
        display: block;
        width: 13px;
        height: 10px;
        background-image: url(${() => assetsUrl("icons/header-trapeze.svg")});
        background-position: center;
        background-repeat: no-repeat;
    }

    :before {
        left: -12px;
        top: -8px;
    }

    :after {
        right: -12px;
        bottom: -8px;
        transform: rotate(-14deg);
    }
`

export const StyledTitle = styled.h1`
    font-weight: bold;
    font-size: 70px;
    line-height: 120%;
    margin-top: 18px;

    ${MediaQuery.tablet} {
        font-size: 58px;
    }

    ${MediaQuery.mobileL} {
        font-size: 38px;
        text-align: center;
    }
`

export const StyledParagraph = styled.p`
    margin-top: 45px;
    font-size: 24px;
    line-height: 160%;
    width: 600px;

    ${MediaQuery.laptopL} {
        padding-right: 30px;
    }

    ${MediaQuery.tablet} {
        padding-right: 0;
        font-size: 18px;
        max-width: 500px;
        width: 100%;
    }

    ${MediaQuery.mobileL} {
        margin-top: 35px;
        width: auto;
        text-align: center;
    }
`

export const StyledButtonsBox = styled.div`
    margin-top: 85px;
    display: flex;
    align-items: center;

    ${MediaQuery.mobileL} {
        margin-top: 50px;
        flex-direction: column;
    }
`

export const StyledButton = styled.button`
    width: 280px;
    display: block;
    cursor: pointer;
    border-radius: 15px;
    background-color: ${Swatches.primary_color};
    transition: opacity 100ms ease;
    padding: 16px 0;
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    box-shadow: 0px 8px 40px -10px rgba(255, 0, 0, 1);

    :hover {
        opacity: 0.9;
        transition: opacity 100ms ease;
    }

    ${MediaQuery.tablet} {
        width: 240px;
    }

    ${MediaQuery.mobileL} {
        flex: 1;
        width: 280px;
    }
`

export const StyledWhitepaperBox = styled.div<{ isMenuShown: boolean }>`
    text-decoration: none;
    box-sizing: border-box;
    padding: 16px 32px 16px 32px;
    color: ${Swatches.text_main};
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    margin-left: 20px;
    position: relative;
    background-color: transparent;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
    ${props =>
        props.isMenuShown &&
        css`
            transition: background-color 120ms ease;
            background-color: ${Swatches.background_main};
        `}

    :before {
        content: "";
        position: absolute;
        display: block;
        width: 32px;
        height: 2px;
        background-color: ${Swatches.primary_color};
        bottom: 0;
        transition: width 120ms ease-in-out;

        ${props =>
            props.isMenuShown &&
            css`
                width: 0;
                transition: width 180ms ease-in-out;
            `}
    }

    ${MediaQuery.tablet} {
        margin-left: 10px;
        padding-left: 15px;
        padding-right: 15px;
    }

    ${MediaQuery.mobileL} {
        margin-left: 0;
        margin-top: 35px;
        width: 280px;
    }

    div.button-content {
        display: flex;

        div.arrow-wrapper {
            margin-left: 12px;
            transition: transform 150ms ease-in-out;

            ${props =>
                props.isMenuShown &&
                css`
                    transition: transform 190ms ease-in-out;
                    transform: rotate(90deg);
                `}
        }
    }
`

const fadeInAnim = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const StyledWhitepaperMenu = styled.div<{ isShown: boolean }>`
    position: absolute;
    background-color: ${Swatches.background_main};
    top: 100%;
    left: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
    display: ${props => (props.isShown ? "block" : "none")};
    z-index: 99;
    animation: ${fadeInAnim} 120ms ease;
`

export const StyledWhitepaperLangItem = styled.a`
    font-size: 14px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    text-decoration: none;
    color: white;
    text-align: left;
    display: flex;
    align-items: center;

    ${MediaQuery.tablet} {
        padding: 20px 12px;
    }

    :hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    div.icon-wrapper {
        margin-left: 15px;
        margin-right: 12px;
    }
`
