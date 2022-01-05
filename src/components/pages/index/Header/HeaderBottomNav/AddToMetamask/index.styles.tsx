import styled from "styled-components"
import { Swatches } from "__styles__/consts"

export const StyledMetamaskButton = styled.button`
    color: white;
    display: flex;
    border-radius: 8px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    margin-left: 16px;
    font-weight: 700;
    transition: opacity 100ms ease;
    font-size: 12px;
    border: 1px solid ${Swatches.primary_color};
    align-items: center;

    :hover {
        transition: opacity 100ms ease;
        opacity: 0.8;
    }

    div.icon-wrapper {
        width: 17px;
        height: 17px;
    }

    span.text {
        padding: 0 10px;
    }
`
