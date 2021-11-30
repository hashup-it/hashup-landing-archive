import styled from "styled-components"
import { mediaQuery } from "../MediaQuery"
import { SectionContainer } from "../Shared/sections.styles"

export const StyledGameContract = styled.div`
    position: relative;
`

export const StyledReversedSectionContainer = styled(SectionContainer)`
    ${mediaQuery.laptop} {
        display: flex;
        flex-direction: column-reverse;
    }

    margin-bottom: 60px;
    position: relative;
    z-index: 9;
`

export const StyledGreyFlare = styled.div`
    background-color: #c4c4c4;
    opacity: 0.2;
    width: 350px;
    height: 350px;
    position: absolute;
    filter: blur(360px);
    right: 400px;
    top: -270px;
    z-index: 0;
    

    ${mediaQuery.tablet} {
        right: 260px;
    }
`

export const Image = styled.img``
