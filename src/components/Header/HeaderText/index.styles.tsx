import styled from "styled-components"
import { mediaQuery } from "../../MediaQuery"
import { Swatches } from "../../../__styles__/Swatches"
import { StyledTabHeaderText } from "../../Shared/sections.styles"

export const StyledLandingHeaderText = styled(StyledTabHeaderText)`
    gap: 80px;

    ${mediaQuery.laptopL} {
        padding-left: 100px;
        gap: 40px;
    }

    ${mediaQuery.tablet} {
        padding-left: 0;
    }
`

export const GradientText = styled.span`
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 0, 0, 0.5) 100%);
    padding-right: 10px;
`

export const ButtonGroup = styled.div`
    display: flex;
    gap: 20px;

    ${mediaQuery.tablet} {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
`

export const HeaderAirdropWrapper = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }
`

export const HeaderAirdropIcon = styled.div`
    background-color: #ffffff;
    border-radius: 15px 0px 0px 15px;
    background-image: url("/assets/icons/bolt.svg");
    background-position: 20px;
    background-repeat: no-repeat;
    background-size: 18;
    width: 52px;
`

export const HeaderGetAirdrop = styled.div`
    background-color: ${Swatches.primary_color};
    border-radius: 0px 15px 15px 0px;
    padding: 16px;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    white-space: nowrap;
    text-align: center;

    ${mediaQuery.tablet} {
        flex: 1;
    }
`
