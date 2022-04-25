import { assetsUrl } from "config"
import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledSection = styled.div`
    margin: 150px auto;
    width: 100%;
`
export const StyledSocialArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 70px;
    gap: 20px;

    ${MediaQuery.laptop} {
        gap: 12px;
        flex-wrap: wrap;
    }
`
