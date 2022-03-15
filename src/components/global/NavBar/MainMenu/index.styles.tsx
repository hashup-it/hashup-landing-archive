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
        gap: 25px;
    }
`

export const StyledMenuItem = styled.span<{ isSelected?: boolean }>`
    transition: opacity 100ms ease;
    font-size: 16px;
    position: relative;

    :before {
        content: "";
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

export const StyledEcosystemBox = styled.div<{ isSelected: boolean; isExpanded: boolean }>`
    display: inline-block;
    position: relative;
    cursor: pointer;
    z-index: 99999;

    span.label {
        display: flex;
        position: relative;
        z-index: 999;
        padding-right: 10px;
        font-size: 16px;

        div.icon-wrapper {
            position: absolute;
            width: 10px;
            right: -8px;
        }
    }

    :before {
        content: "";
        left: -22px;
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

    ul.menu {
        display: ${props => (props.isExpanded ? "flex" : "none")};
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${Swatches.background_main};
        flex-direction: column;
        padding-top: 42px;
        top: -25px;
        z-index: 0;
        border-radius: 5px;
        overflow-y: hidden;
    }
`

export const StyledEcosystemItem = styled.li<{ isSelected: boolean }>`
    list-style: none;
    font-size: 14px;

    a {
        text-align: center;
        display: block;
        position: relative;
        padding: 10px 22px;

        :hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        :before {
            content: "";
            top: 50%;
            left: 6px;
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
    }
`
