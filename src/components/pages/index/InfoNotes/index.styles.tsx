import styled, { keyframes } from "styled-components"
import { Swatches } from "__styles__/consts"
import { MediaQuery } from "__styles__/consts"

export const StyledNotesArea = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 100px;

    ${MediaQuery.tablet} {
        padding-bottom: 40px;
    }
`

export const StyledNote = styled.div`
    width: 280px;
    margin: 35px auto;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
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
    font-weight: 600;
`

export const StyledNoteContent = styled.div`
    margin-top: 10px;
    font-size: 18px;
    line-height: 160%;
    position: relative;
    width: 72%;

    :before {
        // Red line above content
        display: block;
        content: "";
        background-color: ${Swatches.primary_color};
        width: 18px;
        height: 2px;
        width: 20px;
        margin: 22px auto;
    }
`
