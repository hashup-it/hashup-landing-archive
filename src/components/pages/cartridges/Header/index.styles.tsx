import { StyledSectionParagraph } from "components/shared/section.styles"
import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 40px;

    ${MediaQuery.laptop} {
        height: auto;
    }
`

export const StyledTitle = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 115%;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 16em;

    ${MediaQuery.laptop} {
        width: auto;
        padding-top: 112px;
        font-size: 50px;
    }

    ${MediaQuery.mobileL} {
        font-size: 45px;
        width: 100%;
        word-break: break-word;
    }
`

export const SmallCartridgeHeaderText = styled(StyledSectionParagraph)`
    white-space: pre-line;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    padding-bottom: 30px;

    text-align: center;

    color: #e0e0e0;
`

export const StyledCartridgeThumbnailsBox = styled.div`
    display: flex;
    gap: 25px;
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
