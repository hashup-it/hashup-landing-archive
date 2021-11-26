import styled from "styled-components"
import { SectionHeader } from "../Shared/sections.styles"
import { mediaQuery } from "../MediaQuery"

export const StyledLogosSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 124px;
    margin-bottom: 150px;

    ${mediaQuery.laptop} {
        margin-bottom: 80px;
    }
`

export const StyledLogosSectionHeader = styled(SectionHeader)`
    width: 100%;
    margin-bottom: 70px;
`

export const StyledContentBox = styled.div``

export const StyledLogosContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 60px 0;
    text-align: center;
    align-items: center;

    ${mediaQuery.laptop} {
        grid-template-columns: repeat(4, 1fr);
        gap: 40px 20px;
    }

    ${mediaQuery.tablet} {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px 20px;
    }
`

export const StyledLogo = styled.img`
    max-width: 55%;

    ${mediaQuery.tablet} {
        max-width: 40%;
    }

    ${mediaQuery.mobileL} {
        max-width: 65%;
    }
`
