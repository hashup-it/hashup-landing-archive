import { StyledSideSocialMenu } from "components/shared/Header/SideSocialMenu/index.styles"
import { StyledSectionParagraph } from "components/shared/section.styles"
import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledContainer = styled.div`
    height: 100vh;
    position: absolute;
    min-height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);

    ${MediaQuery.laptop} {
        height: auto;
    }

    ${MediaQuery.tablet} {
        padding-top: 30px;
    }

    div.inner-container {
        padding: 0 8px;
    }
`

export const StyledTitle = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 115%;
    padding: 0;
    margin: 0;
    text-align: center;
    max-width: 1100px;
    margin: auto;

    ${MediaQuery.laptopM} {
        font-size: 55px;
        width: 80vw;
    }

    ${MediaQuery.laptop} {
        font-size: 55px;
        padding-top: 112px;
        font-size: 50px;
        width: auto;
    }

    ${MediaQuery.mobileL} {
        font-size: 35px;
        word-break: break-word;
    }
`

export const StyledParagraph = styled(StyledSectionParagraph)`
    margin: 50px auto 90px;
    font-weight: normal;
    max-width: 700px;
    text-align: center;
`

export const StyledThumbnailsBox = styled.div`
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const StyledBackgroundFlare = styled.div`
    position: absolute;
    top: -500px;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 200%;
    background: #d70000;
    opacity: 0.1;
    border-radius: 80%;
    filter: blur(520px);
`
