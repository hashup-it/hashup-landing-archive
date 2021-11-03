import styled, { keyframes } from "styled-components"
import { Swatches } from "../../__styles__/Swatches"
import { mediaQuery } from "../MediaQuery"

export const StyledInfoNotes = styled.div`
    text-align: center;
`

export const StyledNotesArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 40px;

    ${mediaQuery.tablet} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const StyledNote = styled.div`
    width: 220px;
    flex-shrink: 0;
    text-align: left;
    margin: 30px 20px;

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
        border-bottom: red 1px solid;
        border-right: red 1px solid;
        background: linear-gradient(180deg, #010101 0%, rgba(1, 1, 1, 0) 100%);
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
