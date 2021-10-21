import styled from 'styled-components'
import { SectionHeader } from '../Shared/sections.styles'

export const OurPartnersContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
    margin-top: 124px;
    margin-bottom: 230px;
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

        cursor: pointer;
        filter: invert() brightness(3);

        :hover {
            opacity: .5;
        }
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
        content: '“';
        position: absolute;
        top: -1em;
        left: -1em;

        font-family: Sora;
        font-style: normal;
        font-weight: normal;
        font-size: 38px;
        line-height: 160%;

        color: #FF3F3F;
    }
`

export const SponsorLogo = styled.img`
    width: 8rem;
`
