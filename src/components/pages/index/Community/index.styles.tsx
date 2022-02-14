import { assetsUrl } from "config"
import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledSection = styled.div`
    margin: 150px auto -50px;
    width: 100%;
    position: relative;
    z-index: 99;

    h1 {
        text-align: left;
        font-weight: 700;
        font-size: 50px;
        width: auto;

        ${MediaQuery.tablet} {
            text-align: center;
            font-size: 40px;
        }
    }

    p {
        font-weight: 500;
        margin-top: 30px;
        line-height: 160%;
        font-size: 24px;

        ${MediaQuery.tablet} {
            text-align: center;
            font-size: 18px;
        }
    }
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