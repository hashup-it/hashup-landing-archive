import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
    padding-top: 100px;
    padding-bottom: 150px;

    ${MediaQuery.laptop} {
        padding-top: 100px;
        gap: 120px;
    }

    ${MediaQuery.tablet} {
        padding-top: 200px;
    }
`
