import styled from "styled-components";
import { mediaQuery } from "../MediaQuery";
import { Swatches } from "../Swatches";

export const StyledAirdrop = styled.div`

    border-top: 4px solid ${Swatches.primary_color};
    padding-top: 52px;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    grid-template-rows: auto auto;
    grid-template-areas: "header main" 
                         "info referral";

    ${mediaQuery.laptop} {
        grid-template-areas: "header info" 
                             "main main"
                             "referral referral";
        grid-template-columns: 1fr 1fr;
    }

    ${mediaQuery.tablet} {
        grid-template-areas: "header header" 
                             "info info"
                             "main main"
                             "referral referral";
    }
    column-gap: 45px;
    row-gap: 45px;

    margin-bottom: 25vh;

    ${mediaQuery.tablet} {
        row-gap: 20px;
    }
    
`;

export const StyledAirdropHeader = styled.h1`
    grid-area: header;
    font-style: normal;
    font-weight: normal;
    margin-top: 0;
    padding-top: 0;
    font-size: 32.2483px;
    max-width: 340px;
    line-height: 140%;

    ${mediaQuery.laptop} {
        text-align: center;
        max-width: 100%;
    }
`;

export const StyledAirdropMain = styled.div`
    grid-area: main;
`;

export const StyledMainHeader = styled.h3`
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    margin-top: 15px;
    margin-bottom: 0;

    ${mediaQuery.laptop} {
        text-align: center;
    }

    ${mediaQuery.tablet} {
        margin-bottom: 0px;
    }
`;

export const StyledMainSmall = styled.p`
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #646E83;

    ${mediaQuery.laptop} {
        text-align: center;
    }
`;


const inputHeight = 63;
export const StyledInputWrapper = styled.div`
    height: ${inputHeight}px;
    display: grid;
    width: 500px;
    grid-template-columns: ${inputHeight}px auto ${inputHeight}px;
    margin-top: 30px;

    ${mediaQuery.laptop} {
        width: auto;
    }
`;

export const StyledInputIcon = styled.div`
    background-color: #FFFFFF;
    border-radius: 24px 0px 0px 4px;
    background-image: url("/assets/icons/user.svg");
    background-position: center;
    background-repeat: no-repeat;
`;

export const StyledInput = styled.input`
    background-color: #FFFFFF;
    border: none;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 18px;
    color: #222;


    :focus {
        outline: none;
    }
`;

export const StyledInputButton = styled.div`
    background: linear-gradient(90deg, ${Swatches.background_main} 35%, ${Swatches.primary_color} 100%);
    position: relative;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
    
    :hover {
        transition: 1s;
        background: linear-gradient(90deg, ${Swatches.background_main} 0%, ${Swatches.primary_color} 100%);
    }
`;

export const StyledBeforeConnectWrapper = styled.div`
    color: ${Swatches.primary_color};
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    padding: 25px;
    align-items: center;
    display: flex;
    border: 1px dotted ${Swatches.primary_color};
    border-radius: 6px;
    cursor: pointer;
`;

export const StyledInputButtonFill = styled.div`
    background-color: #010101;
    background-image: url("/assets/icons/save.svg");
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    width: calc(100% - 1px);
    height: calc(100% - 2px);
    top: 1px;
    left: 0;
    border-radius: inherit;
`;

export const StyledAirdropInfo = styled.div`
    grid-area: info;
    display: flex;
    gap: 60px;
    justify-content: flex-start;

    ${mediaQuery.laptopL} {
        gap: 20px;
    }

    ${mediaQuery.laptop} {
        justify-content: center;
        align-items: flex-start;
        margin-top: 14px;
    }

    ${mediaQuery.tablet} {
        margin-top: 0;
    }
`;

export const StyledAirdropReferral = styled.div`
    grid-area: referral;
    display: flex;
    justify-content: flex-start;
`;


export const StyledInfoItem = styled.div`

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const StyledInfoLabel = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    
`;

export const StyledInfoValue = styled.span`
    position: relative;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: ${Swatches.primary_color};
    ${mediaQuery.laptop} {
        font-size: 16px;
    }

    &::before {
        content: '';
        position: absolute;
        bottom: -7px;
        left: 0;
        width: 22px;
        height: 1px;
        background: ${Swatches.primary_color};
    }
`;

