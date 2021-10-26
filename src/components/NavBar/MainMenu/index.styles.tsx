import styled from 'styled-components'
import { mediaQuery } from '../../MediaQuery'
import { FooterBottomGroup, FooterTopLeft } from '../../Footer/index.styles'

export const StyledMainMenu = styled.nav`
    display: flex;
    list-style-type: none;
    gap: 50px;
    justify-content: center;

    ${mediaQuery.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
    
    overflow-y: scroll;
`

export const MenuItem = styled.span`
    display: flex;
    align-items: flex-start;

    :hover {
        opacity: 0.9;
    }
    
    > * {
        text-decoration: none;
        color: white;
    }
`

export const FooterTop = styled(FooterTopLeft)`
    text-align: center;

    * {
        justify-content: center;
    }
`
