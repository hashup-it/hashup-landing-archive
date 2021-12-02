import { mediaQuery } from "components/MediaQuery"
import styled from "styled-components"
import { SectionHeader } from "../Shared/sections.styles"
import { globalHorizontalPadding } from "App.styles"

export const StyledHeader = styled(SectionHeader)`
    margin-bottom: 120px;

    ${mediaQuery.tablet} {
        margin-bottom: 60px;
    }
`

export const StyledTeamDesktopWrapper = styled.div`
    ${mediaQuery.tablet} {
        display: none;
    }
`

export const StyledTeamMobileWrapper = styled.div`
    // Mobile only
    display: none;

    ${mediaQuery.tablet} {
        display: block;
    }
`

export const StyledCarousel = styled.div`
    margin: 45px 0;
    width: calc(100% + ${globalHorizontalPadding[mediaQuery.tablet]} * 2);
    margin-left: -${globalHorizontalPadding[mediaQuery.tablet]};

    ${mediaQuery.mobileL} {
        width: calc(100% + ${globalHorizontalPadding[mediaQuery.mobileL]} * 2);
        margin-left: -${globalHorizontalPadding[mediaQuery.mobileL]};
    }
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
`
