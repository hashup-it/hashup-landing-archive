import styled, { keyframes } from "styled-components"
import { GLOBAL_CONTENT_WIDTH_PX, GLOBAL_HORIZONTAL_PADDING_PX } from "__styles__/consts"

export const StyledHeaderWrapper = styled.div`
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
    padding: 165px 0 135px 0;
    background-color: black;

    div.content {
        width: ${GLOBAL_CONTENT_WIDTH_PX}px;
        padding: 0 ${GLOBAL_HORIZONTAL_PADDING_PX}px;
        box-sizing: border-box;
        margin: auto;
        display: flex;
    }
`

export const StyledTextSection = styled.div`
    flex: 1;
`

const bloomAnim = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
`

export const StyledImageSection = styled.div`
    div.img-wrapper {
        width: 175px;
        margin: auto;
        position: relative;

        :before {
            // Background flare
            content: "";
            display: block;
            width: 80px;
            height: 80px;
            background: #ff3f3f;
            filter: blur(25px);
            position: absolute;
            top: 10%;
            left: 18%;
            animation: ${bloomAnim} 2.2s linear infinite;
        }
    }
`

export const StyledTitle = styled.div`
    div.label {
        font-size: 18px;
        font-weight: 600;
    }

    h1.title {
        margin-left: -4px;
        font-weight: 700;
        font-size: 70px;
    }
`

export const StyledParagraph = styled.div`
    line-height: 160%;
    font-size: 24px;
    margin-top: 26px;
    width: 700px;
`
