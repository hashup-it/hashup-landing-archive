import styled, { css } from "styled-components"
import { mediaQuery } from "components/MediaQuery"
import { Swatches } from "__styles__/Swatches"
import { assetsUrl } from "config"

export const StyledContainer = styled.div`
    width: 650px;

    ${mediaQuery.laptopL} {
        padding-left: 100px;
    }

    ${mediaQuery.tablet} {
        padding-left: 0;
        width: 100%;
    }
`

export const StyledLabel = styled.h2`
    font-size: 18px;
    font-weight: 600;
    position: relative;
    display: inline-block;

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

    ${mediaQuery.laptop} {
        font-size: 46px;
    }
`

export const StyledParagraph = styled.p`
    margin-top: 45px;
    font-size: 24px;
    line-height: 160%;
    width: 600px;

    ${mediaQuery.laptopL} {
        padding-right: 30px;
    }

    ${mediaQuery.tablet} {
        padding-right: 0;
        font-size: 17px;
        width: auto;
        margin-top: 20px;
    }
`

export const StyledButtonsBox = styled.div`
    margin-top: 85px;
    display: flex;

    ${mediaQuery.tablet} {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
`

export const StyledButton = styled.button`
    width: 280px;
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

    :hover {
        opacity: 0.9;
        transition: opacity 100ms ease;
    }

    ${mediaQuery.tablet} {
        flex: 1;
    }
`

export const StyledWhitepaperBox = styled.div<{ isMenuShown: boolean }>`
    text-decoration: none;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 15px;
    padding: 16px 32px 16px 32px;
    color: ${Swatches.text_main};
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    background-color: ${Swatches.background_main};
    margin-left: 20px;

    ${props =>
        props.isMenuShown &&
        css`
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 1px solid transparent;
        `}

    ${mediaQuery.tablet} {
        margin-left: 0;
        margin-top: 16px;
    }
`

export const StyledWhitepaperMenu = styled.div<{ isShown: boolean }>`
    position: absolute;
    background-color: ${Swatches.background_main};
    top: 100%;
    left: -1px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #ffffff;
    border-top: 0.5px solid white;
    width: 100%;
    display: ${props => (props.isShown ? "block" : "none")};
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

    ${mediaQuery.tablet} {
        padding: 20px 12px;
    }

    :hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    img {
        margin-left: 15px;
        margin-right: 12px;
    }
`
