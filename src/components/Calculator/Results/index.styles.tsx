import { mediaQuery } from "components/MediaQuery"
import styled, { css } from "styled-components"
import { Swatches } from "__styles__/Swatches"

export const StyledResults = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;

    ${mediaQuery.tablet} {
        flex-direction: column;
        gap: 25px 0;
    }
`

export const StyledResultSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 40px;

    ${mediaQuery.laptopL} {
        gap: 0 15px;
    }

    ${mediaQuery.tablet} {
        gap: 0 80px;
    }

    ${mediaQuery.mobileL} {
        gap: 0 30px;
    }
`

export const StyledResultsDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 120px;

    ${mediaQuery.tablet} {
        max-width: auto;
    }
`

export const StyledResultsHeader = styled.h4`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    padding: 0;
    margin: 0;
`

export const StyledResultsText = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 140%;
    max-width: 120px;
`

export const StyledPriceLabelOutline = styled.div<{ outlineColor: string }>`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    padding: 1px;
    top: -1px;
    left: -1px;
    background: rgb(22, 22, 22);
    background: linear-gradient(
        90deg,
        rgba(22, 22, 22, 1) 43%,
        ${props => props.outlineColor} 100%
    );
`

export const StyledValueBox = styled.div<{ outlineColor: string; shadow?: boolean }>`
    display: flex;
    gap: 18px;
    align-items: center;

    .value {
        width: 140px;
        padding: 20px 0;
        text-align: center;
        background: #161616;
        border-radius: 13px;
        position: relative;
        font-size: 20px;
        position: relative;
        transform-style: preserve-3d;

        :before {
            content: "$";
            font-size: 14px;
        }

        :after {
            content: "";
            display: block;
            position: absolute;
            width: calc(100% - 1px);
            height: calc(100%);
            padding: 1px;
            left: 0px;
            top: -1px;
            transform: translateZ(-1px);
            border-radius: 13px;
            background: linear-gradient(90deg, #161616, 70%, ${props => props.outlineColor} 100%);

            ${props =>
                props.shadow &&
                css`
                    box-shadow: 0px 10px 83px -25px ${props.outlineColor};
                `}
        }
    }

    .label {
        font-size: 13px;
        line-height: 140%;
        max-width: 120px;
    }

    ${mediaQuery.laptopL} {
        gap: 12px;
    }

    ${mediaQuery.tablet} {
        display: flex;
        flex-direction: column-reverse;
        gap: 12px;

        .label {
            max-width: 140px;
        }
    }
`

export const StyledVersus = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 15px;
    align-items: center;

    :before,
    :after {
        display: block;
        content: "";
        background: ${Swatches.primary_color};
        width: 1.3px;
        height: 32px;
    }

    ${mediaQuery.tablet} {
        position: relative;
        font-size: 15px;

        :before,
        :after {
            display: block;
            content: "";
            background: ${Swatches.primary_color};
            width: 180px;
            height: 1px;
            position: absolute;
            top: 6px;
        }

        :before {
            left: -200px;
        }

        :after {
            right: -200px;
        }
    }

    ${mediaQuery.mobileL} {
        :before,
        :after {
            width: 130px;
        }

        :before {
            left: -140px;
        }

        :after {
            right: -140px;
        }
    }
`
