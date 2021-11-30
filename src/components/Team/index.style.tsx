import { mediaQuery } from "components/MediaQuery"
import styled from "styled-components"
import { SectionHeader } from "../Shared/sections.styles"

export const StyledHeader = styled(SectionHeader)`
    margin-bottom: 80px;
`

export const StyledSectionContainer = styled.div`
    margin-bottom: 140px;

    ${mediaQuery.laptop} {
        grid-template-columns: 1fr 1fr;
        margin-bottom: 80px;
    }
`

export const StyledPeopleContainer = styled.div`
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 60px 20px;

    ${mediaQuery.laptopM} {
        grid-template-columns: 1fr 1fr 1fr;
    }

    ${mediaQuery.laptop} {
        grid-template-columns: 1fr 1fr;
    }

    ${mediaQuery.tablet} {
        grid-template-columns: 1fr;
    }

`
