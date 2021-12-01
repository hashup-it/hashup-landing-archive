import styled, { css } from "styled-components"
import { ComparisonItem, ComparisonItemContent } from "../../Comparison/index.styles"
import { SectionLabel, SectionList, SmallHeaderText } from "../../Shared/sections.styles"
import { mediaQuery } from "../../MediaQuery"
import { CartridgeColor } from "../interfaces"

export const CartridgeDescriptionContainer = styled.div<{ leftBasedLayout: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    ${props =>
        props.leftBasedLayout
            ? css`
                  grid-template-areas: "text image";
              `
            : css`
                  grid-template-areas: "image text";
              `};
    gap: 0px;
    position: relative;

    ${mediaQuery.laptop} {
        display: flex;
        flex-direction: column;
    }

    ${mediaQuery.tablet} {
        display: flex;
        flex-direction: column;
    }
`

export const StyledDescriptionArea = styled.div`
    grid-area: text;
    position: relative;
    height: 100%;
`

export const StyledDescriptionBox = styled.div<{ leftBasedLayout: boolean }>`
    position: absolute;
    grid-area: text;
    top: 0;
    display: inline-block;
    width: 480px;
    padding: 0 20px;
    box-sizing: border-box;

    ${props =>
        props.leftBasedLayout
            ? css`
                  right: 0;
              `
            : css`
                  left: 0;
              `}

    ${mediaQuery.laptopM} {
        width: 400px;
        padding: 0;
        ${props =>
            props.leftBasedLayout
                ? css`
                      right: -50px;
                  `
                : css`
                      left: -50px;
                  `}
    }

    ${mediaQuery.laptop} {
        position: static;
        width: 100%;
        padding: 0;
    }
`

export const StyledLabel = styled(SmallHeaderText)`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;

    color: #cdcdcd;
`

export const StyledImageBox = styled.div<{ mobileImageUrl: string }>`
    grid-area: image;
    height: 32em;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        position: absolute;
        width: calc(50%);
        height: auto;
        clip: auto;
    }

    ${mediaQuery.laptop} {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    ${mediaQuery.tablet} {
        > * {
            display: none;
        }

        content: url(${props => props.mobileImageUrl});
        width: 80%;
        height: auto;
        margin-top: -20px;
    }
`

export const CartridgeInfoBox = styled(ComparisonItem)`
    margin-top: 30px;
    width: 100%;
`

export const CartridgeTargetItemContent = styled(ComparisonItemContent)`
    padding: 15px 20px;
    background: #161616;
`

export const CartridgeTargetLabel = styled(SectionLabel)`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 160%;
    letter-spacing: 0.11em;
    color: #9d9d9d;
`

export const CartridgeTargetContent = styled.div`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    color: #ffffff;
`

export const StyledBulletList = styled(SectionList)`
    margin: 25px 0 25px 25px;
`

export const StyledHook = styled.div`
    position: absolute;
    top: -112px;
`

export const StyledFlare = styled.div<{ color: CartridgeColor }>`
    background-color: ${props => props.color};
    width: 600px;
    height: 540px;
    opacity: 0.2;
    border-radius: 100%;
    filter: blur(520px);
`
