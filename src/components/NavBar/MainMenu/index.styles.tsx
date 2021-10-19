import styled from "styled-components";
import { Swatches } from "../../Swatches";

export const StyledMainMenu = styled.nav`

    display: flex;
    list-style-type: none;
    gap: 50px;
    justify-content: center;

`;

export const MenuItem = styled.span`

    display: flex;
    align-items: flex-start;

    :hover {
        opacity: 0.9;
    }
    
`;