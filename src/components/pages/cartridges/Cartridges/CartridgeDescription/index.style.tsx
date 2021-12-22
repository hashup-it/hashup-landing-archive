import styled, { css } from "styled-components"
import { SmallHeaderText } from "components/pages/cartridges/sections.styles"
import { MediaQuery } from "__styles__/consts"
import { CartridgeColor } from "config"
import { hexToRGB } from "util/math"
import { StyledSectionTitle } from "components/shared/section.styles"

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

    ${MediaQuery.laptop} {
        display: flex;
        flex-direction: column;
    }

    ${MediaQuery.tablet} {
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
    text-align: left;

    ${StyledSectionTitle} {
        text-align: left;
        margin-bottom: 25px;
    }

    ${props =>
        props.leftBasedLayout
            ? css`
                  right: 0;
              `
            : css`
                  left: 0;
              `}

    ${MediaQuery.laptopM} {
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

    ${MediaQuery.laptop} {
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
    text-align: left;
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

    ${MediaQuery.laptop} {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    ${MediaQuery.tablet} {
        > * {
            display: none;
        }

        content: url(${props => props.mobileImageUrl});
        width: 80%;
        height: auto;
        margin-top: -20px;
    }
`

export const CartridgeInfoBox = styled.div<{ outlineColor: string }>`
    background: linear-gradient(
        90deg,
        ${props => hexToRGB(props.outlineColor, 0)} 35%,
        ${props => props.outlineColor} 100%
    );
    padding: 1px;
    display: grid;
    border-radius: 13px;
    position: relative;
    width: 100%;
    margin-top: 30px;

    ${MediaQuery.tablet} {
        width: 232px;
    }
`

export const CartridgeTargetItemContent = styled.ul`
    margin: 0;
    padding: 0;
    padding: 15px 20px;
    background: #161616;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: inherit;
    position: relative;
    list-style-type: none;
    font-size: 14px;
    line-height: 180%;
`

export const CartridgeTargetContent = styled.div`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    color: #ffffff;
`

export const StyledBulletList = styled.ul<{ markerSrc: string }>`
    margin: 35px 0 25px 25px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;

    color: #cdcdcd;

    li {
        padding-left: 19px;
    }

    li::marker {
        content: url(${props => props.markerSrc});
        width: 6px;
        height: 6px;
    }
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
