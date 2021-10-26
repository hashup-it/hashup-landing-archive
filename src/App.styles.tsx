import styled from "styled-components";
import { mediaQuery } from "./components/MediaQuery";
import { Swatches } from "./components/Swatches";

export const LandingContainer = styled.div`
    background-color: ${Swatches.background_main};
    min-height: 100vh;
    
    color: white;
    overflow: hidden;

    width: 1240px;
    margin: 0 auto;
 

    ${mediaQuery.laptop} {
        
    }

    @media only screen and (max-width: 1240px) {
        width: auto;
        padding: 0px 93px 0px 93px;
 
    }


    ${mediaQuery.mobileL} {
        padding: 0px 23px 0px 23px;
    }
`;

