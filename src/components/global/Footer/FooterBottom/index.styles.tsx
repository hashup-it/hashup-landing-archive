import { MediaQuery } from "__styles__/consts";
import styled from "styled-components";

export const StyledFooterBottom = styled.div`
    position: relative;
    padding: 32px 0px 32px 0px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    align-items: center;

    ${MediaQuery.tablet} {
        align-items: center;
        flex-direction: column;
        gap: 20px;

        padding: 0;
        margin-bottom: 12em;
    }
`


export const StyledCopyright = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #8a8f98;
`
export const StyledFooterLink = styled.a`
    font-family: Roboto;
    font-style: normal;
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



