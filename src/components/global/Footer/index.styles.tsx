import styled, { css } from "styled-components"
import { Swatches, MediaQuery, GLOBAL_HORIZONTAL_PADDING_PX } from "__styles__/consts"
import { SocialMediaIcons } from "config"

export const StyledFooter = styled.div`
    position: relative;
    padding-top: 65px;
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
    margin: 55px 0;

    ${MediaQuery.tablet} {
        justify-content: center;
    }

    a {
        transition: opacity 100ms ease;

        :hover {
            opacity: 0.8;
            transition: opacity 100ms ease;
        }
    }
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

export const StyledLogoWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
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
