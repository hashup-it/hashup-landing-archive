import styled from "styled-components"
import { SectionHeader } from "../Shared/sections.styles"
import { mediaQuery } from "../MediaQuery"

export const OurPartnersContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    margin-top: 124px;
    margin-bottom: 230px;

    ${mediaQuery.laptop} {
        margin-bottom: 80px;
    }
`

export const OurPartnersHeader = styled(SectionHeader)`
    width: 100%;
    margin-bottom: 70px;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    justify-content: space-between;
`

export const SponsorLogosContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex-grow: 1;

    column-gap: 1rem;
    row-gap: 4rem;

    > * {
        opacity: 1;
        user-select: none;

        cursor: pointer;
        filter: invert() brightness(3);
        opacity: 0.5;
        transition: opacity 100ms ease;

        :hover {
            transition: opacity 120ms ease;
            opacity: 1;
        }
    }

    ${mediaQuery.laptop} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    ${mediaQuery.mobileL} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const QuoteTextContainer = styled.div`
    max-width: 14em;
    position: relative;

    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 140%;

    margin-left: 3em;

    color: white;

    :before {
        content: "“";
        position: absolute;
        top: -1em;
        left: -1em;

        font-family: Sora;
        font-style: normal;
        font-weight: normal;
        font-size: 38px;
        line-height: 160%;

        color: #ff3f3f;
    }

    ${mediaQuery.tablet} {
        display: none;
    }
`

export const SponsorLogo = styled.img`
    width: 8rem;
`
