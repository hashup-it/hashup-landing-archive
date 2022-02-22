import styled, { css } from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledItem = styled.div`
    border-bottom: 1px solid #343434;

    p.answer {
        color: #959595;
        margin: 0;
        padding: 0px 80px 22px 0;
        font-size: 18px;
        line-height: 160%;

        ${MediaQuery.tablet} {
            padding-right: 0;
            font-size: 15px;
        }
    }
`

export const StyledHeader = styled.div<{ isOpen: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0;
    gap: 30px;

    :hover {
        cursor: pointer;
    }

    div.icon {
        width: 28px;
        height: 28px;
        transition: transform 200ms ease;
        flex-shrink: 0;

        ${p =>
            p.isOpen &&
            css`
                transform: rotate(180deg);
            `}
    }

    h3 {
        font-size: 24px;
        font-weight: 600;

        ${MediaQuery.tablet} {
            font-size: 20px;
        }
    }
`
