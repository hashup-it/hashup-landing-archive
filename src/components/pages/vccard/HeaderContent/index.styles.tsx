import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledNote = styled.div`
    margin-top: 25px;

    ${MediaQuery.laptop} {
        margin-top: 35px;
        text-align: center;
    }

    a {
        color: ${Swatches.primary_color};

        :hover {
            opacity: 0.8;
        }
    }
`
