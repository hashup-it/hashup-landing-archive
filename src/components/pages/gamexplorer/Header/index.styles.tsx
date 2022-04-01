import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledButtons = styled.div`
    margin-top: 22px;
    display: flex;
    align-items: center;

    ${MediaQuery.tablet} {
        flex-direction: column;
        gap: 30px;
        margin-top: 70px;
    }
`