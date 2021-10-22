import styled from "styled-components";
import { mediaQuery } from "../MediaQuery";
import { SectionContainer } from "../Shared/sections.styles";

export const StyledGameContract = styled.div`

`;


export const ReversedSectionContainer = styled(SectionContainer)`
    ${mediaQuery.laptop} {
        display: flex;
        flex-direction: column-reverse;
        
    }
`



export const Image = styled.img`
    
`;