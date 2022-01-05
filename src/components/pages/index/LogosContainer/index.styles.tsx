import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledLogosSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 124px;
    margin-bottom: 150px;

    ${MediaQuery.laptop} {
        margin-bottom: 80px;
    }
`
export const StyledContentBox = styled.div`
    margin-top: 60px;
`

export const StyledLogosContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 55px 0;
    text-align: center;
    align-items: center;

    ${MediaQuery.laptop} {
        grid-template-columns: repeat(4, 1fr);
        gap: 40px 20px;
    }

    ${MediaQuery.tablet} {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px 20px;
    }
`

export const StyledLogoWrapper = styled.div`
    max-width: 55%;

    ${MediaQuery.tablet} {
        max-width: 40%;
    }

    ${MediaQuery.mobileL} {
        max-width: 65%;
    }
`
