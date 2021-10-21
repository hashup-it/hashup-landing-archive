import styled, { css } from "styled-components"
import { Swatches } from "../Swatches"
import { mediaQuery } from "../MediaQuery"

export const StyledRoadmap = styled.div`
    text-align: center;
    margin-top: 100px;
`

export const StyledSlider = styled.div<{ isGrabbed: boolean }>`
    margin-top: 80px;
    min-width: 100%;
    max-width: 100%;
    position: relative;

    cursor: grab;

    ${props =>
        props.isGrabbed &&
        css`
            cursor: grabbing;
        `}
`

export const StyledBoxesArea = styled.div`
    user-select: none;
    display: flex;
    justify-content: center;
    flex: 1;
    justify-content: left;
    margin-left: -90px;
    will-change: transform;

    ${mediaQuery.laptop} {
        margin-left: 0;
    }
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
