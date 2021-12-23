import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 150px;
    padding-bottom: 150px;

    ${MediaQuery.laptop} {
        padding-top: 100px;
        gap: 120px;
    }
`
