import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledNotesBox = styled.div`
    width: 100%;
    display: flex;
    margin-top: 75px;
    gap: 120px;
    justify-content: center;
    flex-wrap: wrap;

    ${MediaQuery.laptopM} {
        gap: 90px;
    }

    ${MediaQuery.laptop} {
        gap: 70px;
    }

    ${MediaQuery.mobileL} {
        gap: 40px;
    }
`
