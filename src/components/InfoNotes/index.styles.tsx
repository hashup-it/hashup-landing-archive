import styled, { keyframes } from "styled-components"
import { Swatches } from "../Swatches"
import { mediaQuery } from '../MediaQuery'

export const StyledInfoNotes = styled.div`
    margin-top: 180px;
    text-align: center;
`

export const StyledNotesArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 40px;
`

export const StyledNote = styled.div`
    width: 220px;
    flex-shrink: 0;
    text-align: left;
    margin: 30px 20px;

    ${mediaQuery.laptopL} {
        margin: 20px 40px;
    }
`

export const NoteGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const rotateAnim = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const StyledNoteBubble = styled.div`
    width: 98px;
    height: 98px;
    background: linear-gradient(180deg, #010101 0%, rgba(1, 1, 1, 0) 100%);
    border-bottom: red 1px solid;
    border-right: red 1px solid;
    border-radius: 100px;
    animation: ${rotateAnim} 4s linear infinite;
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

    :before {
        margin-bottom: 12px;
        display: block;
        content: "";
        background-color: ${Swatches.primary_color};
        width: 18px;
        height: 2px;
    }
`
