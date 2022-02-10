import styled, { css } from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledLeadershipWrapper = styled.div`
    margin-top: 150px;

    div.content {
        margin-top: 80px;
        display: flex;
        justify-content: space-between;
        width: 920px;

        ${MediaQuery.laptop} {
            justify-content: left;
            gap: 100px;
        }

        ${MediaQuery.tablet} {
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 100px;
            width: auto;
        }
    }
`

export const StyledLeaderBox = styled.div`
    width: 390px;

    ${MediaQuery.laptop} {
        width: 300px;
    }

    ${MediaQuery.mobileL} {
        width: 100%;
    }

    div.img-wrapper {
        margin-bottom: 30px;
        width: 300px;

        ${MediaQuery.mobileL} {
            width: 100%;
        }
    }
`

export const StyledTextBox = styled.div`
    font-weight: 600;

    div.header {
        div.role {
            color: ${Swatches.primary_color};
            font-size: 13px;
        }

        div.name {
            font-size: 24px;
            margin-top: 12px;
        }
    }

    p.text {
        margin-top: 45px;
        font-size: 16px;
        line-height: 185%;
        color: #b7b7b7;

        ${MediaQuery.mobileL} {
            text-align: justify;
        }
    }

    div.button-wrapper {
        margin-top: 50px;
        width: 235px;
    }
`
