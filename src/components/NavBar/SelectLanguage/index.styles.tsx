import styled from "styled-components"
import { isTypeAliasDeclaration } from "typescript"
import { Swatches } from "../../../__styles__/Swatches"

export const StyledSelectLanguage = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
    position: relatve;
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
