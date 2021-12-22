import styled from "styled-components"
import { Swatches } from "__styles__/consts"

export const NewsletterContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 160%;
    color: white;
    gap: 9px;
`

export const FormContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const StyledFormDescription = styled.div`
    margin-bottom: 10px;
`

export const StyledInputContainer = styled.div`
    width: 100%;

    .row-form {
        background: ${Swatches.background_main} !important;

        padding: 0 !important;
        width: 100% !important;
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

    // mailerlite.com submit button
    button[type="submit"] {
        background-color: #ff3f3f !important;
        content: "test" !important;
    }

    .ml-form-successBody {
        background: white;
        border-radius: 4px;
        padding-bottom: 0.5rem !important;
    }
`
