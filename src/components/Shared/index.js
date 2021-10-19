import styled from "styled-components";
import { Swatches } from "../Swatches";

export const ColoredText = styled.span`
    color: ${Swatches.primary_color};
`;

export const ButtonOutlined = styled.button`
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 15px;
    background: none;
    padding: 16px 32px 16px 32px;
    font-family: Sora;
    font-style: normal;
    color: ${Swatches.text_main};
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
`;