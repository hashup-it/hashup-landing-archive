import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledButtonsBox = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 35px;

    ${MediaQuery.laptopL} {
        justify-content: center;
    }

    ${MediaQuery.laptop} {
        gap: 5px;
    }

    ${MediaQuery.tablet} {
        margin-top: 90px;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`
