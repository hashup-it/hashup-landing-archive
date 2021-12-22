import styled, { css } from "styled-components"
import { MediaQuery } from "__styles__/consts"
import { Swatches } from "__styles__/consts"
import { NavBarStateEnum } from "./logic"
import { assetsUrl } from "config"

export const StyledNavBar = styled.div<{ state: NavBarStateEnum }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 25px;
    font-size: 16px;
    color: ${Swatches.text_main};
    font-weight: 600;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.93);

    // Interactive hide-show menu on scroll action
    ${props => {
        switch (props.state) {
            case NavBarStateEnum.stickyHidden:
                return css`
                    transform: translateY(-100px);
                    transition: transform 250ms ease;
                `
            case NavBarStateEnum.stickyHiddenAfterTop:
                return css`
                    transform: translateY(-100px);
                `
            case NavBarStateEnum.top:
                return css`
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0);
                    transform: none;
                    transition: background-color 250ms ease;
                `
            default:
                return css`
                    transition: transform 250ms ease;
                `
        }
    }}

    ${MediaQuery.laptop} {
        position: fixed;
        transform: none;
        transition: none;
        background-color: rgba(0, 0, 0, 0.93);
    }

    ${MediaQuery.tablet} {
        padding: 25px 18px;
    }
`

export const MenuWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    width: 1240px;
    margin: 0 auto;

    ${MediaQuery.desktopL} {
        width: 1400px;
    }

    ${MediaQuery.laptopL} {
        width: auto;
    }

    ${MediaQuery.tablet} {
        grid-template-columns: 50px 1fr auto;
        align-items: center;
        width: 100%;
    }
`

export const StyledFullLogo = styled.img`
    width: 150px;
    position: absolute;
    top: 18px;

    ${MediaQuery.tablet} {
        display: none;
    }
`

export const StyledLogoWrapper = styled.div`
    cursor: pointer;
    margin-top: -9px;
    display: flex;
    align-items: center;
    gap: 9px;
`

export const StyledLogoIcon = styled.img`
    display: none;

    ${MediaQuery.tablet} {
        width: 35px;
        position: absolute;
        top: 22px;
        display: block;
    }
`

export const HamburgerButton = styled.div<{ opened: boolean }>`
    width: 30px;
    height: 30px;
    background-image: url(${props =>
        assetsUrl(props.opened ? "icons/x.svg" : "icons/hamburger.svg")});
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 10px;
    display: none;

    ${MediaQuery.tablet} {
        display: initial;
    }
`

export const MobileHideWrapper = styled.div`
    ${MediaQuery.tablet} {
        display: none;
    }
`
