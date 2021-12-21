import styled from "styled-components"
import { Swatches } from "./Swatches"

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
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 9;
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

export const StyledButton1 = styled.button`
    margin: 0;
    box-sizing: border-box;
    padding: 16px 35px;
    border: 1px solid ${Swatches.primary_color};
    border-radius: 15px;
    font-size: 16px;
    text-align: center;
    color: white;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: 100ms ease opacity;

    :hover {
        opacity: 0.8;
        transition: 100ms ease opacity;
    }
`
