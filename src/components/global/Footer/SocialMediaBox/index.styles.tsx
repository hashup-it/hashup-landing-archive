import { MediaQuery } from "__styles__/consts"
import styled from "styled-components"

export const StyledSocialMediaBox = styled.div`
    display: flex;
    gap: 45px;
    align-items: center;
`

export const StyledSocialsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const StyledSocialIconWrapper = styled.a`
    width: 34px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        border-color: white;
    }

    div.icon-wrapper {
        max-height: 17px;
        max-width: 17px;
    }
`

export const StyledSocialMediaText = styled.span`
    font-family: Sora;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    ${MediaQuery.laptop} {
        display: none;
    }
`
