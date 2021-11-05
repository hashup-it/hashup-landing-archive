import { mediaQuery } from "components/MediaQuery"
import styled from "styled-components"
import { Swatches } from "../../../__styles__/Swatches"

/*export const StyledLanguageList = styled.select`
    appearance: none;
    border: none;
    color: white;
    background-color: transparent;
    font-family: Sora, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;

    :focus {
        outline: none;
        border: none;
    }

    :after {
        content: "";
        width: 0.8em;
        height: 0.5em;
        background-color: var(--select-arrow);
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
`

export const StyledLanguageOption = styled.option`
    background-color: black;
`*/

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
    margin-top: 6rem;
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
