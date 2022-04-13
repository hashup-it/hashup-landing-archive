import styled, { css, keyframes } from "styled-components"
import { MediaQuery } from "__styles__/consts"
import { Swatches } from "__styles__/consts"

export const StyledButtonsBox = styled.div`
    margin-top: 45px;
    display: flex;
    align-items: center;

    ${MediaQuery.tablet} {
        margin-top: 50px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 22px;
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
    /* cursor: pointer; */
    margin-left: 20px;
    position: relative;
    background-color: transparent;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    opacity: 0.5;

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
    position: relative;

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
