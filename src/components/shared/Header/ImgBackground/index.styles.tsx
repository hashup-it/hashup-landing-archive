import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledBackgroundImgWrapper = styled.div`
    position: absolute;
    opacity: 0.3;

    ${MediaQuery.laptop} {
        display: block;
        width: 115%;
        left: -10%;
        top: 4%;
    }

    ${MediaQuery.tablet} {
        width: 130%;
        left: -15%;
        top: 6%;
    }
    ${MediaQuery.mobileL} {
        opacity: 0.22;
        width: 170%;
        top: 8%;
        left: -50%;
    }
`
