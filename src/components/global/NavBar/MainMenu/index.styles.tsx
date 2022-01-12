import styled, { css } from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledMainMenu = styled.nav`
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;

    ${MediaQuery.laptop} {
        gap: 20px;
        font-size: 13px;
    }

    ${MediaQuery.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 35px;
    }
`

export const MenuItem = styled.span<{ isSelected?: boolean }>`
    transition: opacity 100ms ease;
    font-size: 16px;
    position: relative;

    :before {
        content: "";
        top: 0;
        left: -14px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 100%;
        background-color: ${Swatches.primary_color};
        width: 8px;
        height: 8px;
        
        ${props =>
            props.isSelected &&
            css`
                position: absolute;
            `}
    }

    a {
        padding: 8px;
    }

    :hover {
        transition: opacity 100ms ease;
        opacity: 0.8;
    }
`
