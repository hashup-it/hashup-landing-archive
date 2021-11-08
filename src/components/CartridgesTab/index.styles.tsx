import styled from "styled-components"
import { SmallHeaderText, TabHeader } from "../Shared/sections.styles"
import { mediaQuery } from "../MediaQuery"
import { ColoredText } from "../Shared"

export const CartridgesTabContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 150px;
    padding-bottom: 150px;
`

export const BackgroundShade = styled.img`
    position: absolute;
    width: 100%;

    background: #d70000;
    opacity: 0.1;
    filter: blur(520px);

    ${mediaQuery.laptop} {
        display: none;
    }
`

export const CartridgesHeaderContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 40px;

    ${mediaQuery.laptop} {
        height: auto;
    }
`

export const SmallCartridgeHeaderText = styled(SmallHeaderText)`
    white-space: pre-line;

    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;

    text-align: center;

    color: #e0e0e0;
`

export const CartridgesTabHeader = styled(TabHeader)`
    font-family: Sora;
    font-style: normal;
    font-weight: 600;
    font-size: 59px;
    line-height: 115%;

    text-align: center;

    width: 16em;

    ${mediaQuery.laptop} {
        width: auto;
        padding-top: 112px;
    }

    ${mediaQuery.mobileL} {
        font-size: 48px;
        width: 90%;
    }
`

export const CartridgeThumbnailsContainer = styled.div`
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const CartridgeThumbnailColoredText = styled(ColoredText)`
    font-family: Sora;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
`
