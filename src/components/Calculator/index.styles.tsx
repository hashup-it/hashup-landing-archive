import { mediaQuery } from "components/MediaQuery"
import styled from "styled-components"
import { Swatches } from "__styles__/Swatches"

export const StyledCalculator = styled.div`
    min-height: 70vh;
    position: relative;
    margin-top: 76px;
    padding: 0px 117px;
    margin-bottom: 80px;

    ${mediaQuery.laptop} {
        padding: 0px 0px;
    }

    ${mediaQuery.laptop} {
        display: none;
    }
`

export const StyledBackgroundImg = styled.div`
    position: absolute;
    pointer-events: none;
    top: -10vh;
    right: -30px;
    background-image: url('/assets/percent.png');
    background-position: center;
    background-repeat: no-repeat;
    width: 400px;
    height: 350px;
    transform-style: preserve-3d;
`

export const StyledBackgroundFlare = styled.div`
    position: absolute;
    pointer-events: none;
    top: -10vh;
    right: -120px;
    width: 400px;
    height: 700px;
    background-color: red;
    opacity: 0.03;
    border-radius: 600px;
    filter: blur(120px);
    transform: rotate(30deg) translateZ(-100px);
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
