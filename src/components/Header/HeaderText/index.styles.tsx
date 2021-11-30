import styled from "styled-components"
import { mediaQuery } from "components/MediaQuery"
import { Swatches } from "__styles__/Swatches"
import { assetsUrl } from "config"

export const StyledLandingHeaderText = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${mediaQuery.laptopL} {
        padding-left: 100px;
    }

    ${mediaQuery.tablet} {
        padding-left: 0;
        gap: 15px;
    }
`

export const StyledTitle = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 115%;
    margin: 0;

    ${mediaQuery.laptop} {
        font-size: 50px;
    }
`

export const StyledParagraph = styled.p`
    font-size: 18px;
    padding-right: 100px;
    line-height: 28px;

    ${mediaQuery.laptopL} {
        padding-right: 30px;
    }

    ${mediaQuery.tablet} {
        font-size: 17px;
    }
`

export const GradientText = styled.span`
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 0, 0, 0.5) 100%);
    padding-right: 10px;
`

export const StyledButtonsBox = styled.div`
    display: flex;
    gap: 20px;

    ${mediaQuery.tablet} {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
`

export const HeaderAirdropWrapper = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }
`

export const HeaderAirdropIcon = styled.div`
    background-color: #ffffff;
    border-radius: 15px 0px 0px 15px;
    background-image: url(${() => assetsUrl("icons/bolt.svg")});
    background-position: 20px;
    background-repeat: no-repeat;
    background-size: 18;
    width: 52px;
`

export const HeaderGetAirdrop = styled.div`
    background-color: ${Swatches.primary_color};
    border-radius: 0px 15px 15px 0px;
    padding: 16px;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    white-space: nowrap;
    text-align: center;

    ${mediaQuery.tablet} {
        flex: 1;
    }
`

export const StyledNewsletterBox = styled.div`
    padding-top: 60px;

    ${mediaQuery.tablet} {
        padding-top: 30px;
    }

    .title {
        font-size: 16px;
        font-weight: 700;
        color: ${Swatches.primary_color};
        padding-bottom: 22px;
        display: block;
    }
`

export const StyledForm = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 80px;

    .row-form {
        background: ${Swatches.background_main} !important;
        padding: 0 !important;
        width: 485px !important;

        ${mediaQuery.mobileL} {
            width: 100% !important;
        }
    }

    .horozintalForm,
    .ml-form-horizontalRow,
    .ml-input-horizontal,
    .ml-button-horizontal {
        width: auto !important;
        background: ${Swatches.background_main} !important;
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
