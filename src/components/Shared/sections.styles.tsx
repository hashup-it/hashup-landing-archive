import styled from "styled-components";
import { Swatches } from "../Swatches";

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;

    gap: 200px;
`;

export const LeftWrapper = styled.div`

`;
export const RightWrapper = styled.div`

`;

export const SectionLabel = styled.span`
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #646E83;
    font-weight: normal;
    font-size: 12px;
`;

export const SectionHeader = styled.h2`
    font-size: 40px;
    line-height: 140%;
    color: white;
    font-weight: normal;
    margin-top: 10px;
`;

export const SectionText = styled.p`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%; 
    color: ${Swatches.text_secondary};
    margin-bottom: 50px;
`;

export const Hyperlink = styled.a`
    text-decoration: none;
    color: inherit;
`
