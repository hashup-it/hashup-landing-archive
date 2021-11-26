import { mediaQuery } from "components/MediaQuery"
import styled from "styled-components"
import { Swatches } from "../../../__styles__/Swatches"

export const StyledSelectLanguage = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-around;
    align-items: center;

    :before {
        content: "";
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

export const StyledSelectedLanguage = styled.div`
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
    position: absolute;
    margin-top: 10rem;
    margin-right: 1.25rem;
`

export const StyledLanguageOption = styled.button`
    cursor: pointer;
    font-family: Sora, sans-serif;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.9);
    color: rgba(255, 255, 255, 1);
    padding: 8px 5px;
    border: none;
    width: 150%;
    transition: color 100ms ease;

    :hover {
        color: rgba(255, 255, 255, 0.8);
        transition: color 100ms ease;
    }
`
