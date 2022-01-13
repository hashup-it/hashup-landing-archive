import { StyledColoredText } from "components/shared/utils.styles"
import styled from "styled-components"
import { CartridgeColor } from "config"

export const StyledBox = styled.a<{ color: CartridgeColor }>`
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    border-radius: 15px;
    text-transform: uppercase;
    text-align: center;
    width: 170px;
    padding: 12px 0;
    transition: opacity 120ms ease;
    position: relative;

    :hover {
        opacity: 0.8;
        transition: opacity 120ms ease;
    }

    :after {
        content: "";
        position: absolute;
        bottom: -0.5px;
        left: 50%;
        transform: translate(-50%);
        border: 1px solid ${props => props.color};
        width: 50px;
    }

    div.label {
        color: ${props => props.color};
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
    }

    div.text {
        font-size: 14px;
        font-weight: 600;
        margin-top: 4px;
        letter-spacing: 1.5px;
    }
`
