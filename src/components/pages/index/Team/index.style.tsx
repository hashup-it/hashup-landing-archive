import { MediaQuery, GLOBAL_HORIZONTAL_PADDING_PX } from "__styles__/consts"
import styled from "styled-components"

export const StyledSectionContainer = styled.div`
    margin-bottom: 120px;

    ${MediaQuery.laptop} {
        grid-template-columns: 1fr 1fr;
        margin-bottom: 80px;
    }
`

export const StyledTeamDesktopWrapper = styled.div`
    ${MediaQuery.tablet} {
        display: none;
    }
`

export const StyledTeamMobileWrapper = styled.div`
    // Mobile only
    display: none;

    ${MediaQuery.tablet} {
        display: block;
    }
`

export const StyledPeopleContainer = styled.div`
    margin-top: 85px;
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 60px 20px;

    ${MediaQuery.laptopM} {
        grid-template-columns: 1fr 1fr 1fr;
    }

    ${MediaQuery.laptop} {
        grid-template-columns: 1fr 1fr;
    }
`

export const StyledCarousel = styled.div`
    margin: 45px 0;
    width: calc(100% + ${GLOBAL_HORIZONTAL_PADDING_PX}px * 2);
    margin-left: -${GLOBAL_HORIZONTAL_PADDING_PX}px;

`
