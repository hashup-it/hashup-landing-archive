import styled from "styled-components"
import { mediaQuery } from "../MediaQuery"
import { Swatches } from "../../__styles__/Swatches"
import { assetsUrl } from "config"

export const StyledFooter = styled.div`
    position: relative;
    margin-top: 50px;
`

export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding-bottom: 50px;

    ${mediaQuery.tablet} {
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

export const FooterBottom = styled.div`
    position: relative;

    padding: 32px 0px 32px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mediaQuery.tablet} {
        align-items: center;
        flex-direction: column;
        gap: 20px;

        padding: 0;
        margin-bottom: 12em;
    }
`

export const Copyright = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;

    display: flex;
    align-items: center;

    color: #8a8f98;
`

export const FooterBottomGroup = styled.div`
    align-items: center;
    display: flex;

    :last-child {
        margin-left: 0;
    }

    ${mediaQuery.tablet} {
        align-items: center;
        gap: 20px;

        > * {
            margin: 0;
            padding: 0;
        }

        flex-direction: column;
    }
`

export const FooterHeading = styled.div`
    display: flex;
    justify-content: space-between;

    ${mediaQuery.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`

export const FooterQuickNavigation = styled.div`
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

export const FooterSeparatorAccent = styled.div`
    background: url("assets/icons/footer-separator-accent.svg");

    width: 280px;
    height: 2px;

    position: absolute;
    top: -50px;
    left: -93px;

    ${mediaQuery.tablet} {
        left: -200px;
    }

    ${mediaQuery.mobileL} {
        display: none;
    }
`

export const FooterSeparatorBase = styled.div`
    background: url("assets/icons/footer-separator-base.svg");

    width: 1440px;
    height: 2px;

    position: absolute;
    top: -50px;
    left: -93px;
`

export const FooterMetaSeparator = styled(FooterSeparatorBase)`
    top: 0;
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

        ${mediaQuery.mobileL} {
            display: none;
        }
    }
`

export const FooterLink = styled.div`
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

    :hover {
        color: white;
    }

    ${mediaQuery.tablet} {
        margin-left: 0;
    }
`

export const FooterMenu = styled.div``

export const MenuLabel = styled.span`
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

export const MenuItems = styled.nav`
    display: flex;
    flex-wrap: wrap;
`

export const MenuList = styled.ul`
    width: 150px;
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0;
    margin-bottom: 46px;
    list-style-type: none;
    padding: 0;
    color: #8a8f98;
    font-weight: normal;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 9px;

    ${mediaQuery.tablet} {
        justify-content: center;
    }
`

export const ListHeader = styled.div`
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

    ${mediaQuery.tablet} {
        justify-content: center;
    }
`

export const MenuHeader = styled(ListHeader)``

export const MenuItem = styled.li`
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    display: flex;

    > a:hover {
        text-decoration: underline;
    }

    ${mediaQuery.tablet} {
        justify-content: center;
    }
`

export const ContactField = styled.div`
    font-style: normal;
    font-size: 14px;
    line-height: 180%;

    display: flex;
    flex-direction: column;

    color: white;

    margin-top: 19px;
    margin-bottom: 7.2px;
`

export const AddressLineEmphasized = styled.div`
    display: inline-block;
    font-weight: 600;
`

export const MailLink = styled.a`
    color: white;
    text-decoration: none;
`

export const CompanyIds = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 180%;
    display: flex;
    align-items: center;
    color: #6d6d6d;

    ${mediaQuery.tablet} {
        justify-content: center;
    }
`

export const Icon = styled.div<{ url: string }>`
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
`

export const Logo = styled.img`
    cursor: pointer;
`
