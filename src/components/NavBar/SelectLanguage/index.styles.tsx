import { mediaQuery } from 'components/MediaQuery'
import styled from 'styled-components'
import { Swatches } from '../../../__styles__/Swatches'

export const StyledSelectLanguage = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
    position: relatve;

    :before {
        content: '';
        width: 1px;
        height: 100%;
        background-color: ${Swatches.primary_color};
        margin-right: 15px;

        ${mediaQuery.laptopM} {
            margin-right: 8px;
        }
    }
`

export const StyledLanguageIcon = styled.img`
    display: flex;
`

export const StyledLanguage = styled.div`
    cursor: pointer;
    text-transform: uppercase;

    :hover {
        opacity: 0.9;
    }

    display: flex;
    gap: 10px;
`

export const StyledLanguageList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 8rem;
    gap: .5em;
    position: absolute;
    margin-right: 2rem;
`

export const StyledLanguageOption = styled.button`
    cursor: pointer;
    font-family: Sora, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    background-color: black;
    color: white;
    padding: 0.2rem;
    margin-top: 0.1rem;
    border: solid 1.5px ${Swatches.primary_color};
    border-radius: 5px;
    width: 150%;

    :hover {
        opacity: 0.9;
    }
`
