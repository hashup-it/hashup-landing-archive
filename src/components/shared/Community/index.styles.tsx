import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"
import { StyledSectionTitle } from "../section.styles"

export const StyledSection = styled.div`
    margin: 150px auto;
    display: flex;
    align-items: center;

    ${MediaQuery.laptop} {
        gap: 50px;
        flex-direction: column;
    }

    div.first {
        width: 40%;
        text-align: left !important;

        ${MediaQuery.laptop} {
            width: 100%;
        }

        h3 {
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 16px;

            ${MediaQuery.laptop} {
                text-align: center;
            }
        }

        ${StyledSectionTitle} {
            text-align: left;
            font-size: 40px;
            margin-left: 0;

            ${MediaQuery.laptop} {
                text-align: center;
                margin: auto;
            }
        }
    }

    div.second {
        width: 60%;
        display: flex;
        justify-content: center;
        gap: 35px;

        ${MediaQuery.laptop} {
            width: 100%;
        }

        ${MediaQuery.tablet} {
            flex-direction: column;
            align-items: center;
            gap: 15px;
            margin-top: 25px;
        }
    }
`
