import styled from 'styled-components'
import { mediaQuery } from '../MediaQuery'
import { Swatches } from '../../__styles__/Swatches'

export const StyledNavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: grid;
    padding: 40px;
    grid-template-columns: 1fr auto 1fr;
    font-size: 16px;
    color: ${Swatches.text_main};
    font-weight: 700;
    align-items: flex-start;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);

    ${mediaQuery.tablet} {
        grid-template-columns: 50px  1fr auto;
        align-items: center;
    }
`

export const Logo = styled.img`
    margin-top: 5px;

    ${mediaQuery.tablet} {
        display: none;
    }
`

export const LogoWrapper = styled.div`
    cursor: pointer;
    margin-top: -9px;
    display: flex;
    align-items: center;
    gap: 9px;
`

export const LogoIcon = styled.img``

export const ButtonsMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 60px;

    > * {
        cursor: pointer;
    }
`

export const Icon = styled.img`
    padding-top: 6px;
    padding-left: 9px;
`

export const HamburgerButton = styled.div<({ opened: boolean })>`
    width: 30px;
    height: 30px;
    background-image: url(${props => props.opened ? '/assets/icons/x.svg' : '/assets/icons/hamburger.svg'});
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 10px;
    display: none;

    ${mediaQuery.tablet} {
        display: initial;
    }
`

export const MobileHideWrapper = styled.div`
    ${mediaQuery.tablet} {
        display: none;
    }
`
