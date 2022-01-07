import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"
import { FooterTopLeft } from "../../Footer/index.styles"

export const StyledMainMenu = styled.nav`
    display: flex;
    list-style-type: none;
    gap: 50px;
    justify-content: center;
    overflow-y: auto;
    position: relative;

    ${MediaQuery.laptop} {
        gap: 20px;
        font-size: 13px;
    }

    ${MediaQuery.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 35px;
    }
`

export const MenuItem = styled.span`
    display: flex;
    align-items: flex-start;
    transition: opacity 100ms ease;

    :hover {
        transition: opacity 100ms ease;
        opacity: 0.8;
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