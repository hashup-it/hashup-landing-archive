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
    margin: 0;

    ${mediaQuery.laptop} {
        font-size: 46px;
    }
`

export const StyledParagraph = styled.p`
    font-size: 18px;
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
    display: flex;
    margin-top: 35px;

    ${mediaQuery.tablet} {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
`

export const StyledGetAirdropButton = styled.div`
    display: flex;
    cursor: pointer;
    margin-left: 20px;

    ${mediaQuery.tablet} {
        margin-left: 0;
        margin-top: 16px;
    }

    :hover {
        opacity: 0.9;
    }

    div.icon {
        background-color: #ffffff;
        border-radius: 15px 0px 0px 15px;
        background-image: url(${() => assetsUrl("icons/bolt.svg")});
        background-position: 20px;
        background-repeat: no-repeat;
        width: 52px;
    }

    div.text {
        background-color: ${Swatches.primary_color};
        border-radius: 0px 15px 15px 0px;
        padding: 16px 0;
        color: white;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        white-space: nowrap;
        text-align: center;
        width: 210px;

        ${mediaQuery.tablet} {
            flex: 1;
        }
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

    ${props =>
        props.isMenuShown &&
        css`
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 1px solid transparent;
        `}
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

export const StyledNewsletterBox = styled.div`
    padding-top: 60px;

    ${mediaQuery.tablet} {
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

        ${mediaQuery.mobileL} {
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
