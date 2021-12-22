import styled from "styled-components"
import { StyledSectionParagraph, StyledSectionTitle } from "components/shared/section.styles"
import { StyledButton1 } from "components/shared/buttons.styles"

export const StyledSectionWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 300px auto 40px;
    display: grid;
    grid-template-columns: 45% 55%;

    div.first {
        position: relative;
        z-index: 10;
        text-align: left;

        ${StyledSectionTitle} {
            text-align: left;
        }

        ${StyledSectionParagraph} {
            text-align: left;
            margin-bottom: 50px;
        }

        ${StyledButton1} {
            width: 330px;
        }
    }
`

export const StyledBackgroundImg = styled.img`
    position: absolute;
    z-index: 1;
    width: 1900px;
    margin-top: -30px;
    opacity: 0.1;
    left: -360px;
    top: -60px;
    pointer-events: none;
    user-select: none;
`

export const StyledMainImage = styled.img`
    width: 112%;
    transform: translateX(100px);
    position: relative;
    z-index: 99;
`

export const StyledAnchor = styled.div`
    position: absolute;
    top: -150px;
`
