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
    padding: 10px 25px;
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
        padding: 12px 15px;
        background-color: rgba(0, 0, 0, 0.95);
    }
`

export const StyledInnerBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledLogoWrapper = styled.div`
    ${MediaQuery.tablet} {
        flex: 1;
    }

    div.icon-logo {
        display: none;

        ${MediaQuery.tablet} {
            width: 35px;
            height: 35px;
            display: block;
        }
    }

    div.full-logo {
        width: 150px;

        ${MediaQuery.tablet} {
            display: none;
        }
    }
`

export const HamburgerButton = styled.div<{ opened: boolean }>`
    display: none;

    ${MediaQuery.tablet} {
        display: block;
        width: 30px;
        height: 30px;
        background-image: url(${props =>
            assetsUrl(props.opened ? "icons/x.svg" : "icons/hamburger.svg")});
        background-position: center;
        background-repeat: no-repeat;
        margin-left: 10px;
    }
`

export const MobileHideWrapper = styled.div`
    ${MediaQuery.tablet} {
        display: none;
    }
`
