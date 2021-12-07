import styled from "styled-components"
import { mediaQuery } from "../MediaQuery"
import { Swatches } from "__styles__/Swatches"
import { assetsUrl } from "config"

export const StyledAirdropSection = styled.div`
    position: relative;
`

export const StyledBackgroundFlare = styled.div`
    position: absolute;
    pointer-events: none;
    top: -130px;
    left: 70px;
    width: 600px;
    height: 750px;
    background-color: red;
    opacity: 0.08;
    border-radius: 600px;
    filter: blur(120px);
    transform: rotate(-25deg) translateZ(-100px);
    z-index: 0;
`

export const StyledAirdropBox = styled.div`
    position: relative;
    z-index: 9;
    background: linear-gradient(180deg, #010101 0%, rgba(1, 1, 1, 0) 100%);
    border-top: 4px solid ${Swatches.primary_color};
    padding: 52px 6.25%;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        "header input"
        "info referral";
    column-gap: 45px;
    row-gap: 45px;
    margin-bottom: 25vh;

    ${mediaQuery.laptop} {
        grid-template-areas:
            "header info"
            "input input"
            "referral referral";
        grid-template-columns: 1fr 1fr;
    }

    ${mediaQuery.tablet} {
        grid-template-areas:
            "header header"
            "info info"
            "input input"
            "referral referral";
        row-gap: 20px;
        padding: 52px 0;
    }
`

export const StyledContentRow = styled.div`
    background-color: red;
`

export const StyledHeaderBox = styled.h1`
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
`

export const StyledInputBox = styled.div`
    grid-area: input;
`

export const StyledInputHeader = styled.div`
    font-weight: normal;
    line-height: 23px;
    margin-top: 15px;
    margin-bottom: 0;
    
    ${mediaQuery.laptop} {
        text-align: center;
    }
    
    ${mediaQuery.tablet} {
        margin-bottom: 0px;
    }
    
    div.title {
        font-size: 18px;
    }
    div.caption {
        margin-top: 10px;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #646e83;

        ${mediaQuery.laptop} {
            text-align: center;
        }
    }
`

const inputHeight = 63
export const StyledInputWrapper = styled.div`
    height: ${inputHeight}px;
    display: grid;
    width: 500px;
    grid-template-columns: ${inputHeight}px auto ${inputHeight}px;
    margin-top: 30px;

    ${mediaQuery.laptop} {
        width: auto;
    }
`

export const StyledInputIcon = styled.div`
    background-color: #ffffff;
    border-radius: 24px 0px 0px 4px;
    background-image: url(${() => assetsUrl("icons/user.svg")});
    background-position: center;
    background-repeat: no-repeat;
`

export const StyledInput = styled.input`
    background-color: #ffffff;
    border: none;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 18px;
    color: #222;

    :focus {
        outline: none;
    }
`

export const StyledInputButton = styled.div<{ isDisabled: boolean }>`
    background: ${props =>
        props.isDisabled
            ? `linear-gradient(90deg, ${Swatches.background_main} 35%, ${Swatches.text_secondary} 100%)`
            : `linear-gradient(90deg, ${Swatches.background_main} 35%, ${Swatches.primary_color} 100%)`};
    position: relative;
    border-radius: 0px 4px 4px 0px;
    cursor: ${props => (props.isDisabled ? "cursor" : "pointer")};
`

export const StyledBeforeConnectWrapper = styled.div`
    color: ${Swatches.primary_color};
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    padding: 25px;
    align-items: center;
    display: flex;
    border: 1px dashed ${Swatches.primary_color};
    border-radius: 6px;
    cursor: pointer;
    width: 500px;
    box-sizing: border-box;

    :after {
        content: "";
        width: 20px;
        margin-left: 12px;
        height: 15px;
        display: inline-block;
        background-image: url(${() => assetsUrl("icons/metamask.svg")});
        background-position: center;
        background-repeat: no-repeat;
    }

    ${mediaQuery.tablet} {
        width: 300px;
    }
`

export const StyledInputButtonFill = styled.div<{ isDisabled: boolean }>`
    background-color: #010101;
    background-image: url(${props =>
        assetsUrl(`icons/${props.isDisabled ? "check.svg" : "save.svg"}`)});
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    width: calc(100% - 1px);
    height: calc(100% - 2px);
    top: 1px;
    left: 0;
    border-radius: inherit;

    :hover {
        background-image: url(${() => assetsUrl("icons/check.svg")});
    }
`

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
`

export const StyledAirdropReferral = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const StyledInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const StyledInfoLabel = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
`

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
        content: "";
        position: absolute;
        bottom: -7px;
        left: 0;
        width: 22px;
        height: 1px;
        background: ${Swatches.primary_color};
    }
`

export const StyledAfterConnectOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const StyledCopyReferral = styled.div`
    background: #ff3f3f;
    border-radius: 15px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    padding: 18px 30px 18px 23px;
    color: white;
    cursor: pointer;
    align-items: center;
    display: flex;
    gap: 20px;
`

export const StyledCopyReferralIcon = styled.img``

export const StyledReferralInfo = styled.span`
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    max-width: 200px;
`
