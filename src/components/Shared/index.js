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
    cursor: pointer;

    :hover {
        background-color: white;
        color: ${Swatches.background_main};
    }
`;

export const TestSpace = styled.div`
    height: 100vh;
`;

export const GradientText = styled.span`
    background: linear-gradient(90deg, #000000 0%, rgba(255, 0, 0, 0.5) 100%);
`;

export const BoldText = styled.span`
    color: white;
    font-weight: bold;
`;

export const StyledTopLine = styled.div`
    width: 266.12px;
    height: 4px;
    background: ${Swatches.primary_color}
`;
