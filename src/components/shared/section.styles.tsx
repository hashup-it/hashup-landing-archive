import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledSectionWrapper = styled.div<{marginTop?: string}>`
    margin: auto;
    margin-top: ${p => p.marginTop ? p.marginTop : '200px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    ${MediaQuery.tablet} {
        margin-top: 200px;
    }
`

export const StyledSectionLabel = styled.h3`
    display: inline-block;
    background-color: #21242b;
    text-align: center;
    font-size: 18px;
    padding: 11px 26px;
    border-radius: 24px;
    margin-bottom: 50px;
    font-weight: 600;
    position: relative;
    z-index: 9;

    ${MediaQuery.laptopL} {
        font-size: 16px;
    }

    ${MediaQuery.laptop} {
        margin-bottom: 25px;
        font-size: 14px;
    }
`

export const StyledSectionTitle = styled.h2`
    color: white;
    line-height: 130%;
    font-size: 45px;
    font-weight: 700;
    text-align: center;
    position: relative;
    max-width: 850px;
    z-index: 9;
    margin: 0 auto;

    ${MediaQuery.laptopL} {
        font-size: 40px;
    }

    ${MediaQuery.laptop} {
        max-width: 600px;
        font-size: 30px;
    }
`

export const StyledSmallSectionTitle = styled(StyledSectionTitle)`
    text-align: left;
    font-size: 40px;
    line-height: 140%;
    color: white;
    margin-top: 20px;
    margin-left: 0;

    ${MediaQuery.tablet} {
        font-size: 30px;
    }
`

export const StyledSmallSectionLabel = styled.h3`
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #646e83;
    font-weight: normal;
    font-size: 12px;
`

export const StyledSectionParagraph = styled.p`
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: white;
    max-width: 600px;
    margin-top: 50px;
    position: relative;
    z-index: 9;
    font-weight: 500;

    ${MediaQuery.laptopL} {
        font-size: 22px;
        max-width: 600px;
    }

    ${MediaQuery.laptop} {
        font-size: 18px;
        margin-top: 40px;
    }

    ${MediaQuery.mobileL} {
        margin-top: 30px;
    }

    strong {
        font-weight: 700;
        color: white;
    }
`

export const StyledSeparator = styled.div`
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
    background-color: #323232;
    height: 1px;

    :before {
        content: "";
        width: 30%;
        height: 3px;
        background-color: ${Swatches.primary_color};
        top: -1px;
        position: absolute;
    }
`
