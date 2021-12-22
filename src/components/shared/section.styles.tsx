import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledSectionWrapper = styled.div`
    margin: auto;
    padding: 270px 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const StyledSectionLabel = styled.h3`
    display: inline-block;
    background-color: #21242b;
    text-align: center;
    font-size: 18px;
    padding: 11px 0;
    border-radius: 24px;
    margin-bottom: 50px;
    width: 205px;
    font-weight: 500;
    position: relative;
    z-index: 9;
`

export const StyledSectionTitle = styled.h1`
    color: white;
    line-height: 130%;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    position: relative;
    z-index: 9;
`

export const StyledSmallSectionTitle = styled(StyledSectionTitle)`
    text-align: left;
    font-size: 40px;
    line-height: 140%;
    color: white;
    margin-top: 20px;

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
    font-size: 24px;
    line-height: 160%;
    text-align: center;
    color: white;
    max-width: 860px;
    margin-top: 50px;
    position: relative;
    z-index: 9;
`
