import styled from "styled-components";
import { mediaQuery } from "../../MediaQuery";
import { Swatches } from "../../Swatches";

export const StyledMainMenu = styled.nav`
    display: flex;
    list-style-type: none;
    gap: 50px;
    justify-content: center;

    ${mediaQuery.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

`;

export const MenuItem = styled.span`

    display: flex;
    align-items: flex-start;

    :hover {
        opacity: 0.9;
    }
    
`;