import { FC } from "react"
import styled from "styled-components"
import { Swatches } from "__styles__/consts"

export const StyledButton1 = styled.button`
    margin: 0;
    box-sizing: border-box;
    padding: 16px 35px;
    border: 1px solid ${Swatches.primary_color};
    border-radius: 15px;
    font-size: 16px;
    text-align: center;
    color: white;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: 100ms ease opacity;

    :hover {
        opacity: 0.8;
        transition: 100ms ease opacity;
    }
`