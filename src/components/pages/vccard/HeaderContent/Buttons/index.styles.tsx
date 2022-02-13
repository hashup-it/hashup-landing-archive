import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledButtonsBox = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 35px;

    ${MediaQuery.laptop} {
        gap: 5px;
        justify-content: center;
    }

    ${MediaQuery.tablet} {
        margin-top: 90px;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`
