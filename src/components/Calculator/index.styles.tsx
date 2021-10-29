import styled from "styled-components"
import { Swatches } from "__styles__/Swatches"

export const StyledCalculator = styled.div`
    min-height: 70vh;
    position: relative;
    margin-top: 76px;
    padding: 0px 117px;
    margin-bottom: 100px;
`

export const StyledBackgroundImg = styled.img`
    position: absolute;
    pointer-events: none;
    top: -10vh;
    right: 0px;
`

export const StyledHeader = styled.h2`
    font-weight: normal;
    font-size: 28px;
    line-height: 150%;
    max-width: 50vw;

    :before {
        margin-bottom: 75px;
        margin-left: -117px;
        display: block;
        left: 0;
        content: "";
        width: 265px;
        height: 4px;
        background-color: ${Swatches.primary_color};
    }
`

export const StyledSlidersContainer = styled.div`
    margin: 100px 0px;
    display: flex;
    flex-direction: column;
    gap: 90px;
`
