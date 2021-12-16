import { mediaQuery } from "components/MediaQuery";
import styled from "styled-components";

export const StyledFooterMenu = styled.div``


export const StyledMenuItems = styled.nav`
    display: flex;
    flex-wrap: wrap;
`

export const StyledMenuList = styled.ul`
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

export const StyledMenuItem = styled.a`
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    text-decoration: none;

    > a:hover {
        text-decoration: underline;
    }

    ${mediaQuery.tablet} {
        justify-content: center;
    }
`
