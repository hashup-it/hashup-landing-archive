import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledContentWrapper = styled.div`
    max-width: 1000px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;

    ${MediaQuery.laptopM} {
        margin-top: 50px;
    }

    ${MediaQuery.tablet} {
        margin-top: 0px;
    }

    div.icon {
        margin-bottom: 12px;

        ${MediaQuery.tablet} {
            width: 65px;
            margin-bottom: 4px;
        }
    }
`

export const StyledInputBox = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 65px;

    ${MediaQuery.tablet} {
        flex-direction: column;
        margin-top: 90px;
    }

    input,
    button {
        border-radius: 6px;
        font-size: 16px;
        font-weight: 600;
        color: white;
        padding: 10px 20px;
        box-sizing: border-box;
    }

    input {
        border: 1px solid #4e4f52;
        background-color: ${Swatches.background_main};
        width: 280px;
    }

    button {
        text-transform: uppercase;
        background-color: ${Swatches.primary_color};
        width: 120px;
        transition: opacity 100ms ease;

        :hover {
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 100ms ease;
        }

        ${MediaQuery.tablet} {
            width: 280px;
        }
    }
`
