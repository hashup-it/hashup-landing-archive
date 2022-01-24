import styled from "styled-components"
import { StyledSectionParagraph, StyledSectionTitle } from "components/shared/section.styles"
import { StyledButton1 } from "components/shared/buttons.styles"
import { MediaQuery } from "__styles__/consts"

export const StyledSectionWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 300px auto 40px;
    display: grid;
    grid-template-columns: 45% 55%;

    ${MediaQuery.tablet} {
        margin: 80px auto 40px;
        grid-template-columns: 100%;
        gap: 40px;
    }

    div.first {
        position: relative;
        z-index: 10;
        text-align: left;

        ${StyledSectionTitle} {
            text-align: left;
            margin-left: 0;
        }

        ${StyledSectionParagraph} {
            text-align: left;
            margin-bottom: 50px;

            ${MediaQuery.tablet} {
                margin-bottom: 10px;
            }
        }

        ${StyledButton1} {
            width: 330px;

            ${MediaQuery.mobileL} {
                display: block;
                margin: auto;
            }
        }
    }
`

export const StyledBackgroundImgWrapper = styled.div`
    position: absolute;
    z-index: 1;
    width: 1900px;
    margin-top: -30px;
    opacity: 0.1;
    left: -360px;
    top: -60px;
    pointer-events: none;
    user-select: none;

    ${MediaQuery.laptopL} {
        top: -200px;
        left: -600px;
    }

    ${MediaQuery.tablet} {
        top: -00px;
        left: -600px;
        width: 1500px;
    }

    ${MediaQuery.mobileL} {
    }
`

export const StyledMainImageWrapper = styled.div`
    width: 112%;
    /* transform: translateX(100px); */
    position: relative;
    z-index: 99;
    transition: transform 25ms ease-in-out, opacity 25ms ease;
    will-change: opacity, transform;

    ${MediaQuery.laptopL} {
        position: relative;
        right: 0;
        transform: translateX(40px);
        width: 90%;
    }

    ${MediaQuery.tablet} {
        transform: translateX(0);
        position: relative;
        width: 100%;
    }
`

export const StyledAnchor = styled.div`
    position: absolute;
    top: -150px;
`
