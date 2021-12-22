import styled, { css } from "styled-components"
import { Swatches, MediaQuery } from "__styles__/consts"
import { assetsUrl, SocialMediaIcons } from "config"

export const StyledFooter = styled.div`
    position: relative;
    margin-top: 50px;
`

export const StyledFooterTop = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding-bottom: 50px;

    ${MediaQuery.tablet} {
        grid-template-columns: auto;
        justify-content: center;
        text-align: center;
    }
`

export const FooterTopLeft = styled.div`
    font-size: 13px;
    color: ${Swatches.text_secondary};
    line-height: 22px;
`
export const StyledHeading = styled.div`
    display: flex;
    justify-content: space-between;

    ${MediaQuery.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`

export const StyledQuickNavigation = styled.div`
    display: flex;
    align-items: center;

    > p {
        font-family: Sora;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        margin: 0;
    }

    > a {
        text-decoration: none;
        color: inherit;
    }

    margin: 55px 0;
`

export const StyledSeparatorAccent = styled.div`
    background: url(${() => assetsUrl("icons/footer-separator-accent.svg")});
    width: 280px;
    height: 2px;
    position: absolute;
    top: -50px;
    left: -93px;

    ${MediaQuery.tablet} {
        left: -200px;
    }

    ${MediaQuery.mobileL} {
        display: none;
    } ;
`

export const StyledSeparatorBase = styled.div`
    background: url(${() => assetsUrl("icons/footer-separator-base.svg")});
    width: 1440px;
    height: 2px;
    position: absolute;
    top: -50px;
    left: -93px;
`

export const StyledMenuLabel = styled.span`
    color: ${Swatches.primary_color};
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 12px;
    line-height: 45px;
    display: flex;
    align-items: center;
    gap: 13px;
`

export const ColoredLine = styled.div`
    background: ${Swatches.primary_color};
    opacity: 0.2;
    width: 125px;
    height: 1px;
`

export const StyledListHeader = styled.div`
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 0.08em;
    color: #6d6d6d;
    margin-bottom: 10px;

    ${MediaQuery.tablet} {
        justify-content: center;
    }
`

export const StyledMenuHeader = styled(StyledListHeader)``

export const StyledIcon = styled.div<{ url: string }>`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: 0.63px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    background: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center;

    :hover {
        border-color: white;
    }

    ${props =>
        props.url === SocialMediaIcons.discord &&
        css`
            background-size: 20px;
        `}
`

export const StyledLogo = styled.img`
    cursor: pointer;
`

export const SocialMediaGroup = styled.div`
    align-items: center;
    display: flex;
    gap: 15px;

    :last-child {
        margin-left: 0;
    }

    > span {
        text-transform: uppercase;
        font-family: Sora;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
        display: flex;
        align-items: center;
        letter-spacing: 0.08em;

        ${MediaQuery.mobileL} {
            display: none;
        }
    }
`

export const StyledAccentDash = styled.span`
    display: inline-block;
    background: url("assets/icons/accented-long-em-dash.svg");
    height: 2px;
    width: 18px;
    margin: 0 17px;
`
