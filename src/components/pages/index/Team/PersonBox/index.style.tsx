import styled from "styled-components"
import { Swatches } from "__styles__/consts"
import { RoleEnum } from "./interfaces"
import { MediaQuery } from "__styles__/consts"

export const StyledPersonContainer = styled.div<{ personRole: RoleEnum }>`
    margin-top: 60px; // Space for header-avatar

    .outline {
        background: ${props => {
            switch (props.personRole) {
                case RoleEnum.coreTeam:
                    return `linear-gradient(${Swatches.primary_color} 0%, ${Swatches.background_main} 80%)`
                case RoleEnum.team:
                    return `linear-gradient(#343942 0%, ${Swatches.background_main} 80%)`
                default:
                    return `linear-gradient(#3b404b 0%, ${Swatches.background_main} 100%)`
            }
        }};
        padding: 1px;
        border-radius: 40px;
        position: relative;

        ${MediaQuery.tablet} {
            width: 290px;
            margin: auto;
        }
    }

    ${MediaQuery.tablet} {
        width: 320px; // There is some margin added
    }
`

export const StyledAvatarImg = styled.img`
    border-radius: 50%;
    width: 120px;
    position: absolute;
    top: -60px;
    right: 40px;
`

export const StyledContent = styled.div`
    padding: 60px 32px;
    min-height: 260px;
    position: relative;
    background: linear-gradient(180deg, #010101 0%, ${Swatches.background_main} 100%);
    border-radius: 40px;
`

export const StyledRole = styled.div`
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 6px;
    margin-top: 10px;
`

export const StyledNameBox = styled.div`
    font-family: Sora;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 24px;
    min-height: 68px;
`

export const StyledDescription = styled.div`
    font-family: Sora;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #b7b7b7;
`

export const StyledIconA = styled.a`
    text-decoration: none;
    width: 20px;
    height: 20px;
    display: block;
    opacity: 0.8;
    transition: opacity 100ms ease;

    :hover {
        transition: opacity 100ms ease;
        opacity: 1;
    }

    img {
        width: 16px;
    }
`

export const StyledSocialMediaBox = styled.div`
    position: absolute;
    bottom: 35px;
    display: flex;

    ${StyledIconA} {
        margin-right: 12px;
    }

    :before {
        content: "";
        display: block;
        width: 25px;
        height: 2px;
        position: absolute;
        top: -25px;
        background-color: ${Swatches.primary_color};
    }
`
