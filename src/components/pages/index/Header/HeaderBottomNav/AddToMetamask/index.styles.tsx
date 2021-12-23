import styled from "styled-components"
import { Swatches } from "__styles__/consts"

export const StyledMetamaskButton = styled.div`
    display: grid;
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

    :hover {
        transition: opacity 100ms ease;
        opacity: 0.7;
    }

    .text {
        padding: 0 10px;
    }
`
