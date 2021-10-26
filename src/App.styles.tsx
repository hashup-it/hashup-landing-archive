import styled from "styled-components";
import { mediaQuery } from "./components/MediaQuery";
import { Swatches } from "./__styles__/Swatches";

export const LandingContainer = styled.div`
    background-color: ${Swatches.background_main};
    min-height: 100vh;
    padding: 0px 93px 0px 93px;
    color: white;
    overflow: hidden;

    ${mediaQuery.laptop} {
        padding: 0px 30px 0px 30px;
    }

    ${mediaQuery.mobileL} {
        padding: 0px 23px 0px 23px;
    }
`;

