import styled from "styled-components"
import { Swatches } from "../../__styles__/Swatches"
import { mediaQuery } from "../MediaQuery"
import { globalHorizontalPadding } from "App.styles"

export const StyledRoadmap = styled.div`
    text-align: center;
    margin-top: 0px;
`

export const StyledCarousele = styled.div`
    margin: 80px 0 140px;
    width: calc(100% + ${globalHorizontalPadding[mediaQuery.desktop]} * 2);
    margin-left: -${globalHorizontalPadding[mediaQuery.desktop]};

    ${mediaQuery.laptopL} {
        width: calc(100% + ${globalHorizontalPadding[mediaQuery.laptopL]} * 2);
        margin-left: -${globalHorizontalPadding[mediaQuery.laptopL]};
        margin-top: 50px;
    }

    ${mediaQuery.mobileL} {
        width: calc(100% + ${globalHorizontalPadding[mediaQuery.mobileL]} * 2);
        margin-left: -${globalHorizontalPadding[mediaQuery.mobileL]};
    }

    .alice-carousel {
        padding: 10px 0;
    }

    .alice-carousel__dots {
        margin-top: 80px;

        ${mediaQuery.tablet} {
            margin-top: 50px;
        }
    }

    .alice-carousel__dots-item {
        background-color: transparent;
        margin: 0 5px;
        width: 25px;
        height: 30px;

        :hover {
            background-color: transparent;
        }

        :before {
            margin-top: 15px;
            display: block;
            content: "";
            width: 25px;
            height: 2px;
            background-color: ${Swatches.inactive};
        }

        &.__active {
            background-color: transparent;
            width: 60px;

            :before {
                background-color: ${Swatches.primary_color};
                width: 60px;
                background-color: ${Swatches.primary_color};
                opacity: 1;
            }
        }
    }
`
