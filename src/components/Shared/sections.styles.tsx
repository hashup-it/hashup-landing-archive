import styled from "styled-components"
import { mediaQuery } from "../MediaQuery"
import { Swatches } from "../../__styles__/Swatches"

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;
    gap: 200px;
    margin-bottom: 150px;

    ${mediaQuery.laptop} {
        gap: 100px;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        gap: 50px;
        margin-bottom: 100px;
    }
`

export const LeftWrapper = styled.div`
    ${mediaQuery.laptop} {
        padding: 0px 10vw 0px 10vw;
    }

    ${mediaQuery.tablet} {
        padding: 0;
        width: 100%;
    }

    ${mediaQuery.mobileL} {
        padding: 0px 0px 0px 0px;
    }
`
export const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SectionPhoto = styled.div<{ url: string }>`
    width: 300px;
    height: 400px;

    background-image: url(${props => props.url});
    position: relative;
    transform-style: preserve-3d;

    ::after {
        content: "";
        transform: translateZ(-1px);
        z-index: 0;
        position: absolute;
        background-image: url(${props => props.url});
        width: 100%;
        right: -60px;
        top: -60px;
        height: 100%;
        filter: blur(20px);
    }
`

export const StyledStackingContext = styled.div`
    position: absolute;
`

export const SectionBottomLeftPhoto = styled.img`
    width: 150px;
    height: 260px;
    position: absolute;
    left: -25%;
    bottom: -50px;

    ${mediaQuery.tablet} {
        display: none;
    }
`

export const SectionPhotoSimple = styled.img`
    max-width: 450px;

    ${mediaQuery.laptop} {
        max-width: auto;
    }

    ${mediaQuery.mobileL} {
        max-width: 100%;
    }
`

export const SectionLabel = styled.span`
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #646e83;
    font-weight: normal;
    font-size: 12px;
`

export const SectionHeader = styled.h2`
    font-size: 40px;
    line-height: 140%;
    color: white;
    font-weight: normal;
    margin-top: 10px;

    ${mediaQuery.tablet} {
        font-size: 30px;
    }
`

export const TabHeader = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 115%;
    padding: 0;
    margin: 0;

    ${mediaQuery.laptop} {
        font-size: 50px;
    }
`

export const SmallHeaderText = styled.p`
    color: ${Swatches.text_secondary};
    padding: 0;
    margin: 0;
`

export const StyledTabHeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${mediaQuery.laptop} {
        padding-left: 0px;
        padding: 0 10vw 0 10vw;
    }

    ${mediaQuery.mobileL} {
        padding-left: 0px;
        padding: 0 0 0 0;
    }
`

export const SectionText = styled.p`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    color: ${Swatches.text_secondary};
    margin-bottom: 50px;
`

export const Hyperlink = styled.a`
    text-decoration: none;
    color: inherit;
`

export const SectionList = styled.ul<{ markerResource?: string }>`
    display: flex;
    flex-direction: column;
    gap: 14px;

    padding: 0;
    margin: 0;

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
        content: url(${props => props.markerResource ?? "/assets/icons/list-marker-default.svg"});
        width: 6px;
        height: 6px;
    }
`
