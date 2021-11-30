import { mediaQuery } from "components/MediaQuery"
import styled from "styled-components"
import { Swatches } from "__styles__/Swatches"

export const StyledSectionWrapper = styled.div`
    position: relative;
    margin-top: 76px;
    margin-bottom: 150px;

    ${mediaQuery.laptop} {
        margin-bottom: 80px;
    }
`

export const StyledCalculator = styled.div`
    position: relative;
    padding: 0px 117px 120px 117px;
    background-color: #070706;
    border-top-right-radius: 90px;

    ${mediaQuery.laptop} {
        padding: 0;
        background-color: transparent;
    }
`

export const StyledBackgroundImg = styled.div`
    position: absolute;
    pointer-events: none;
    top: -130px;
    right: -90px;
    background-image: url("/assets/percent.png");
    background-position: center;
    background-repeat: no-repeat;
    width: 400px;
    height: 350px;
    transform-style: preserve-3d;
    z-index: 0;

    ${mediaQuery.laptop} {
        display: none;
    }
`

export const StyledBackgroundFlare = styled.div`
    position: absolute;
    pointer-events: none;
    top: -10vh;
    right: -120px;
    width: 400px;
    height: 700px;
    background-color: red;
    opacity: 0.06;
    border-radius: 600px;
    filter: blur(240px);
    transform: rotate(30deg) translateZ(-100px);
    z-index: 0;
`

export const StyledHeader = styled.h2`
    font-weight: normal;
    font-size: 28px;
    line-height: 150%;
    max-width: 50vw;

    :before {
        // Red line
        margin-bottom: 75px;
        margin-left: -85px;
        display: block;
        left: 0;
        content: "";
        width: 265px;
        height: 4px;
        background-color: ${Swatches.primary_color};
    }

    ${mediaQuery.laptop} {
        max-width: 100%;

        :before {
            display: none;
        }
    }
`

export const StyledSlidersContainer = styled.div`
    margin: 100px 0px;
    display: flex;
    flex-direction: column;
    gap: 90px;

    ${mediaQuery.laptop} {
        margin: 60px 0px;
        gap: 50px 0;
    }

    ${mediaQuery.tablet} {
        margin: 60px 0px;
        gap: 30px 0;
    }
`
