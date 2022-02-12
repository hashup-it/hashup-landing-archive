import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledContentWrapper = styled.div`
    div.top-group {
        display: flex;
        align-items: center;

        ${MediaQuery.laptop} {
            flex-direction: column;
        }
    }
`

export const StyledPlayButton = styled.button`
    margin-left: 100px;
    display: flex;
    align-items: center;
    gap: 22px;
    background-color: transparent;
    transition: opacity 100ms ease;

    ${MediaQuery.laptopM} {
        margin-left: 35px;
    }

    ${MediaQuery.laptop} {
        margin: 35px 0;
    }

    ${MediaQuery.tablet} {
        margin: 60px 0 0 0;
    }

    div.label {
        color: ${Swatches.text_main};
        font-weight: 600;
        font-size: 16px;

        ${MediaQuery.laptop} {
            font-size: 22px;
        }
    }

    :hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 100ms ease;
    }
`
