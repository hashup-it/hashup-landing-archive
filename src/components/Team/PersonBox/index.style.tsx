import styled from "styled-components"
import { ComparisonItemContent } from "../../Comparison/index.styles"
import { Swatches } from "__styles__/Swatches"
import { RoleEnum } from "./interfaces"
import { mediaQuery } from "components/MediaQuery"

export const StyledPersonContainer = styled.div<{ personRole: RoleEnum }>`
    margin-top: 60px; // Space for header-avatar
    .outline {
        background: ${props => {
            switch (props.personRole) {
                case RoleEnum.coreTeam:
                    return `linear-gradient(${Swatches.primary_color} 0%, ${Swatches.background_main} 80%)`
                case RoleEnum.team:
                    return `linear-gradient(#2e2e2d 0%, ${Swatches.background_main} 80%)`
                default:
                    return "auto"
            }
        }};
        padding: 1px;
        border-radius: 40px;
        position: relative;

        ${mediaQuery.tablet} {
            width: 290px;
            margin: auto;
        }
    }

    ${mediaQuery.tablet} {
        width: 320px; // There is some margin added
    }
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 120px;
    position: absolute;
    top: -60px;
    right: 40px;
`

export const StyledContent = styled(ComparisonItemContent)`
    padding: 60px 32px;
    min-height: 260px;
    position: relative;
    background: linear-gradient(180deg, #010101 0%, ${Swatches.background_main} 100%);
    border-radius: 40px;
`

export const Function = styled.div`
    font-family: Sora;
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
