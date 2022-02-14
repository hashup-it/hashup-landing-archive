import styled, { css } from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"
import { assetsUrl } from "config"

export const StyledContainer = styled.div`
    width: 650px;

    ${MediaQuery.laptopL} {
        width: 600px;
        padding-left: 100px;
    }

    ${MediaQuery.laptop} {
        padding-left: 0;
    }

    ${MediaQuery.tablet} {
        width: 100%;
        padding-left: 0;
    }

    ${MediaQuery.mobileL} {
        margin-top: 40px;
    }
`

export const StyledLabel = styled.h2<{ showAccents?: boolean }>`
    font-size: 18px;
    font-weight: 700;
    position: relative;
    display: inline-block;

    ${MediaQuery.mobileL} {
        text-align: center;
        width: 180px;
        margin: auto;
        display: block;
        font-size: 14px;
    }

    ${p =>
        p.showAccents &&
        css`
            margin-left: 12px;

            :before,
            :after {
                content: "";
                position: absolute;
                display: block;
                width: 13px;
                height: 10px;
                background-image: url(${() => assetsUrl("icons/header-trapeze.svg")});
                background-position: center;
                background-repeat: no-repeat;
            }

            :before {
                left: -12px;
                top: -8px;
            }

            :after {
                right: -12px;
                bottom: -8px;
                transform: rotate(-14deg);
            }
        `}

    strong {
        color: ${Swatches.primary_color};
    }
`

export const StyledTitle = styled.h1`
    font-weight: bold;
    font-size: 70px;
    line-height: 120%;
    margin-top: 18px;
    margin-left: -4px;

    ${MediaQuery.tablet} {
        font-size: 58px;
        margin-left: 0;
    }

    ${MediaQuery.mobileL} {
        font-size: 38px;
        text-align: center;
    }

    strong {
        color: ${Swatches.primary_color};
    }
`

export const StyledParagraph = styled.p`
    margin-top: 45px;
    font-size: 24px;
    line-height: 160%;
    width: 600px;

    ${MediaQuery.laptopL} {
        padding-right: 30px;
    }

    ${MediaQuery.tablet} {
        padding-right: 0;
        font-size: 18px;
        max-width: 500px;
        width: 100%;
    }

    ${MediaQuery.mobileL} {
        margin-top: 35px;
        width: auto;
        text-align: center;
    }

    strong {
        color: ${Swatches.primary_color};
    }
`
