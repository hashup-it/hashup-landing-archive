import styled, { keyframes } from "styled-components"
import { Swatches } from "../../__styles__/Swatches"
import { mediaQuery } from "../MediaQuery"

export const StyledInfoNotes = styled.div`
    text-align: center;
    margin-bottom: 180px;

    ${mediaQuery.laptop} {
        margin-bottom: 80px;;
    }
`

export const StyledNotesArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 90px;

    ${mediaQuery.tablet} {
    }
`

export const StyledNote = styled.div`
    width: 220px;
    text-align: left;
    margin: 0 auto;

    ${mediaQuery.laptopL} {
        margin: 20px 40px;
    }

    ${mediaQuery.tablet} {
        margin: 40px 0px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const rotateAnim = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const StyledNoteBubble = styled.div<{ icon: string; initRotateDelay: number }>`
    position: relative;

    .icon {
        position: absolute;
        left: 1px;
        top: 1px;
        width: 97px;
        height: 97px;
        border-radius: 100px;
        z-index: 100;
        margin-bottom: -90px;
        background: url(${props => props.icon});
        background-position: center;
        background-size: 40%;
        background-repeat: no-repeat;
    }

    .bubble {
        width: 98px;
        height: 98px;
        border-radius: 100px;
        border-bottom: ${Swatches.primary_color} 1px solid;
        border-right: ${Swatches.primary_color} 1px solid;
        background: linear-gradient(180deg, ${Swatches.background_main} 0%, rgba(1, 1, 1, 0) 100%);
        animation: ${rotateAnim} 5s linear infinite;
        animation-delay: -${props => props.initRotateDelay}s;
        z-index: 50;
    }
`

export const StyledNoteLabel = styled.div`
    margin-top: 40px;
    line-height: 140%;
    font-size: 24px;
`

export const StyledNoteContent = styled.div`
    margin-top: 30px;
    font-size: 18px;
    line-height: 160%;
    color: ${Swatches.text_tertiary};
    position: relative;

    ${mediaQuery.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    :before {
        margin-bottom: 12px;
        display: block;
        content: "";
        background-color: ${Swatches.primary_color};
        width: 18px;
        height: 2px;

        ${mediaQuery.tablet} {
            width: 20vw;
        }
    }
`
