import styled, { css } from "styled-components"
import { Swatches } from "../Swatches"

export const StyledRoadmap = styled.div`
    text-align: center;
`

export const StyledSlider = styled.div`
    margin-top: 80px;
    min-width: 100%;
    max-width: 100%;
    position: relative;
`

const ENTIRE_WIDTH_OF_INFOBOX: number = 393

export const StyledBoxesArea = styled.div<{ selected: number }>`
    display: flex;
    justify-content: center;
    flex: 1;
    justify-content: left;
    transition: transform 300ms ease-in-out;
    transform: translateX(${({ selected }) => selected * ENTIRE_WIDTH_OF_INFOBOX * -1}px);
`

export const StyledSliderControls = styled.div`
    margin: 80px auto;
    display: flex;
    justify-content: center;
`

export const StyledSliderControl = styled.div<{ selected: boolean }>`
    margin: 0 7px;
    width: 25px;
    height: 30px;
    cursor: pointer;
    transition: width 100ms;

    :before {
        transition: width 100ms;
        margin-top: 15px;
        display: block;
        content: "";
        width: 25px;
        height: 2px;
        background-color: ${Swatches.primary_color};
    }

    ${props =>
        props.selected &&
        css`
            transition: width 100ms;
            width: 60px;

            :before {
                transition: width 100ms;
                width: 60px;
            }
        `}
`
