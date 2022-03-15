import { StyledLoadingSpinner } from "components/shared/loading.styles"
import styled from "styled-components"
import { maxWidth, MediaQuery, Swatches } from "__styles__/consts"

export const StyledBoxWrapper = styled.div`
    position: relative;
    z-index: 0;
    background-color: black;
    height: 160px;
    border-radius: 20px;
    padding: 45px 55px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 150px auto 0;
    position: relative;

    ${MediaQuery.laptop} {
        padding: 45px 30px;
    }

    ${MediaQuery.tablet} {
        align-items: start;
        padding: 15px;
        height: auto;
        flex-direction: column;
    }

    ${MediaQuery.mobileL} {
        align-items: center;
        padding: 32px 14px 30px 22px;
    }
`

export const StyledLine = styled.div`
    top: 0;
    position: absolute;
    left: 0;
    width: 40px;
    height: 100%;
    border-radius: 20px;
    overflow-y: hidden;

    :before {
        content: "";
        height: 100%;
        left: 0;
        top: 0;
        background-color: ${Swatches.primary_color};
        width: 11px;
        position: absolute;

        ${MediaQuery.mobileL} {
            width: 6px;
        }
    }
`

export const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
    width: 240px;
    line-height: 160%;

    ${MediaQuery.laptop} {
        font-size: 22px;
    }

    ${MediaQuery.tablet} {
        text-align: center;
        width: auto;
        padding: 0 30px;
    }

    ${MediaQuery.mobileL} {
        font-size: 20px;
    }

    i {
        font-style: normal;
        color: ${Swatches.primary_color};
    }
`

export const StyledImg = styled.div`
    position: relative;
    width: 300px;
    height: 30px;

    ${MediaQuery.laptopM} {
        width: 285px;
        margin-left: 30px;
    }

    ${MediaQuery.laptop} {
        width: 270px;
        margin-right: -70px;
    }

    ${MediaQuery.tablet} {
        position: absolute;
        right: -70px;
        top: 50%;
        transform: translateY(-50%);
    }

    ${maxWidth("605px")} {
        display: none;
    }

    div.img-wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 365px;

        ${MediaQuery.laptopM} {
            width: 330px;
        }

        ${MediaQuery.laptop} {
            width: 270px;
        }

        ${MediaQuery.tablet} {
            width: 400px;
        }
    }
`

export const StyledForm = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 80px;
    padding-left: 30px;

    ${MediaQuery.tablet} {
        margin-top: 30px;
    }

    ${MediaQuery.mobileL} {
        height: auto;
        padding: 0;
    }

    ${StyledLoadingSpinner} {
        width: 100px;
        margin-top: -18px;
    }

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
        width: 390px !important;

        ${MediaQuery.laptopM} {
            width: 360px !important;
        }
    }
    .form-control {
        background-color: #111 !important;
        border: 1px solid #4e4f52 !important;
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
