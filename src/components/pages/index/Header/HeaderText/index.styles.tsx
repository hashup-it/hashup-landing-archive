import styled, { css } from "styled-components"
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
    margin-top: 35px;
    display: flex;
    align-items: center;

    ${MediaQuery.mobileL} {
        margin-top: 50px;
        flex-direction: column;
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
    z-index: 99;
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

export const StyledNewsletterBox = styled.div`
    padding-top: 50px;
    position: relative;
    z-index: 0;

    ${minHeight("1100px")} {
        padding-top: 10vh;
    }

    ${MediaQuery.laptopM} {
        padding-top: 40px;
    }

    ${MediaQuery.tablet} {
        padding-top: 75px;
    }
    .title {
        font-size: 16px;
        font-weight: 700;
        color: white;
        padding-bottom: 22px;
        display: block;
    }
`

export const StyledForm = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 80px;
    .ml-form-embedWrapper {
        background: transparent !important;
    }
    .row-form {
        background: transparent !important;
        padding: 0 !important;
        width: 455px !important; // This should be exactly as buttons box
        ${MediaQuery.mobileL} {
            width: 100% !important;
        }
    }
    .horozintalForm,
    .ml-form-horizontalRow,
    .ml-input-horizontal,
    .ml-button-horizontal {
        width: auto !important;
        background: transparent !important;
    }
    .horozintalForm {
        width: 100% !important;
    }
    .horizontal-fields {
        display: flex !important;
        margin: 0 !important;
        padding: 0 !important;
        width: auto !important;
    }
    // mailerlite.com form container
    .ml-form-horizontalRow {
        display: flex !important;
        gap: 10px;
        width: 100% !important;
    }
    // mailerlite.com input field container
    .ml-input-horizontal {
        width: 100% !important;
        * {
            width: 100% !important;
        }
    }
    button[type="submit"] {
        background-color: ${Swatches.primary_color} !important;
    }
    .ml-form-successBody {
        background: white;
        border-radius: 4px;
        padding-bottom: 0.5rem !important;
    }
`
