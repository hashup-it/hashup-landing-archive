import styled from "styled-components"
import { ButtonOutlined } from "../Shared"
import { Hyperlink, SectionHeader, SectionText } from "../Shared/sections.styles"
import { Swatches } from "__styles__/Swatches"
import { mediaQuery } from "components/MediaQuery"
import { assetsUrl } from "config"

export const WalletSelectorContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    cursor: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContentWrapper = styled.div`
    position: relative;
    background: rgba(22, 22, 22, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.85);
    border-radius: 13px;
    background: #1b1b1b;
    padding: 50px 68px 78px 68px;
    cursor: auto;
    transform-style: preserve-3d;

    :before {
        content: "";
        display: block;
        position: absolute;
        width: calc(100% - 2px);
        height: calc(100%);
        padding: 2px;
        left: 0px;
        top: -1px;
        transform: translateZ(-1px);
        border: 0px solid transparent;
        border-radius: 13px;
        background: linear-gradient(90deg, #000000 30%, ${Swatches.primary_color} 100%);
    }
`

export const ConnectionHeader = styled(SectionHeader)`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 140%;
    text-align: center;
    color: #ffffff;
`

export const ConnectionText = styled(SectionText)`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    color: #cdcdcd;
`

export const ConnectionButton = styled(ButtonOutlined)`
    text-transform: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    :nth-child(2) {
        filter: grayscale(100%);
        opacity: 0.5;
        cursor: auto;
    }

    ${mediaQuery.tablet} {
        width: 90%;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const PermanentHyperlink = styled(Hyperlink)`
    text-decoration: underline;
    color: white;
    font-weight: bold;
`

export const ButtonClose = styled.div`
    position: absolute;
    right: 22px;
    top: 22px;
    background: url(${() => assetsUrl("icons/button-close.svg")});
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: opacity 70ms ease;

    :hover {
        opacity: 0.6;
        transition: opacity 70ms ease;
    }
`
