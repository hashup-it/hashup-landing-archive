import {
    GLOBAL_HORIZONTAL_PADDING_PX,
    GLOBAL_CONTENT_WIDTH_PX,
    MediaQuery,
    Swatches,
} from "__styles__/consts"
import styled from "styled-components"

export const StyledFooterBottom = styled.div`
    position: relative;
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background-color: ${Swatches.background_secondary};

    div.content {
        padding: 32px ${GLOBAL_HORIZONTAL_PADDING_PX}px;
        margin: auto;
        max-width: ${GLOBAL_CONTENT_WIDTH_PX}px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${MediaQuery.tablet} {
            align-items: center;
            flex-direction: column;
            gap: 20px;
        }
    }
`

export const StyledCopyright = styled.span`
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #8a8f98;
`
export const StyledFooterLink = styled.a`
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #8a8f98;
    margin-left: 33px;
    cursor: pointer;
    text-decoration: none;

    :hover {
        color: white;
    }

    ${MediaQuery.tablet} {
        margin-left: 0;
    }
`

export const StyledDocumentGroup = styled.div`
    align-items: center;
    display: flex;

    :last-child {
        margin-left: 0;
    }

    ${MediaQuery.tablet} {
        align-items: center;
        gap: 20px;

        > * {
            margin: 0;
            padding: 0;
        }

        flex-direction: column;
    }
`
