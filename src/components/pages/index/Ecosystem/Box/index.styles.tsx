import styled, { css } from "styled-components"
import { Swatches } from "__styles__/consts"

export const StyledBoxWrapper = styled.div<{ isDisabled: boolean }>`
    width: 340px;
    background-color: #21242b;
    padding: 28px 28px 60px;
    box-sizing: border-box;
    border-top: ${Swatches.primary_color} 2px solid;

    ${p =>
        p.isDisabled &&
        css`
            opacity: 0.5;
        `}
`

export const StyledHeader = styled.div`
    div.icon {
    }

    div.label {
        margin: 25px 0 30px;
        font-size: 18px;

        strong {
            font-weight: 500;
        }

        :after {
            content: "";
            display: block;
            height: 2px;
            width: 18px;
            background-color: ${Swatches.primary_color};
            margin-top: 10px;
        }
    }
`

export const StyledContent = styled.div`
    h3 {
        font-weight: 700;
        font-size: 25px;
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 160%;
        min-height: 150px;
    }
`

export const StyledLink = styled.a<{ label: string }>`
    display: block;
    text-align: center;
    width: 200px;
    text-transform: uppercase;
    padding: 16px 0 20px;
    border: 1px solid ${Swatches.primary_color};
    border-radius: 8px 0 8px 0;
    font-weight: 600;
    font-size: 14px;
    position: relative;

    :hover {
        opacity: 0.8;
        cursor: pointer;
    }
    :after {
        content: "${p => p.label}";
        display: block;
        position: absolute;
        bottom: 0;
        left: -1px;
        transform: translateY(48%);
        background-color: ${Swatches.primary_color};
        font-size: 10px;
        width: 150px;
        padding: 3px 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`

export const StyledSoonNote = styled.div`
    font-size: 14px;
    font-weight: 600;
    padding: 17px;
    text-align: center;
    text-transform: uppercase;
`
