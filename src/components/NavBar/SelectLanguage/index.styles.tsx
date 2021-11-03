import styled from "styled-components"
import { isTypeAliasDeclaration } from "typescript";

export const StyledSelectLanguage = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const StyledLanguageIcon = styled.img``;

export const StyledLanguageList = styled.select`
    border: none;
    color: white;
    background-color: transparent;
    font-family: Sora, sans-serif;
    font-family: Sora;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;

    :focus {
        outline: none;
    }
`;

export const StyledLanguageOption = styled.option`

`;