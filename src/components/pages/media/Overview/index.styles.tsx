import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledOverviewWrapper = styled.div`
    margin-top: 120px;
    margin-bottom: 80px;
`

export const StyledTextSection = styled.div`
    max-width: 920px;
    margin-top: 30px;

    h2 {
        font-size: 24px;
        font-weight: 600;
        margin-top: 40px;

        ${MediaQuery.tablet} {
            font-size: 22px;
        }
    }

    p {
        margin-top: 25px;
        text-align: justify;
        color: #b7b7b7;
        font-size: 16px;
        font-weight: 600;
        line-height: 170%;

        ${MediaQuery.tablet} {
            font-size: 14px;
        }
    }
`
