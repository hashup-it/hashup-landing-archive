import styled from "styled-components"
import { mediaQuery } from "../MediaQuery"
import { Swatches } from "__styles__/Swatches"
import { assetsUrl, SocialMediaIcons } from "config"

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
    box-sizing: border-box;
    z-index: 9;
    background: linear-gradient(180deg, #010101 0%, rgba(1, 1, 1, 0) 100%);
    border-top: 4px solid ${Swatches.primary_color};
    padding: 65px 125px;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        "header input"
        "info referral";
    column-gap: 45px;
    row-gap: 45px;
    margin-bottom: 110px;

    ${mediaQuery.laptop} {
        padding: 65px 45px;
    }

    ${mediaQuery.tablet} {
        display: flex;
        flex-direction: column;
        padding: 27px;
        column-gap: 0;
        row-gap: 0;
    }
`

export const StyledHeaderBox = styled.h1`
    grid-area: header;
    font-style: normal;
    font-weight: normal;
    margin-top: 0;
    padding-top: 0;
    font-size: 32px;
    max-width: 340px;
    line-height: 140%;

    ${mediaQuery.laptop} {
        text-align: center;
        max-width: 100%;
    }

    ${mediaQuery.tablet} {
        text-align: left;
        width: auto;
        font-size: 28px;
    }
`

export const StyledInputBox = styled.div`
    grid-area: input;

    ${mediaQuery.tablet} {
        margin-top: -10px;
    }
`

export const StyledInputHeader = styled.div`
    font-weight: normal;
    line-height: 23px;
    margin-top: 15px;
    margin-bottom: 0;
    text-align: left;

    div.title {
        font-size: 18px;
    }
    div.caption {
        margin-top: 10px;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #646e83;

        ${mediaQuery.tablet} {
            font-size: 14px;
        }
    }
`

const inputHeight = 63
export const StyledInputWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    position: relative;

    div.icon {
        position: absolute;
        width: 22px;
        height: 22px;
        z-index: 9;
        top: 18px;
        left: 12px;
        background-image: url(${() => assetsUrl("icons/user.svg")});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
    }

    input {
        background-color: #ffffff;
        border: none;
        font-weight: normal;
        font-size: 14px;
        color: #222;
        display: block;
        width: 100%;
        padding: 20px;
        padding-left: 45px; // Space for icon
        box-sizing: border-box;
        position: relative;
        border-radius: 24px 0px 0px 4px;

        ${mediaQuery.tablet} {
            border-radius: 4px;
        }

        :focus {
            outline: none;
        }
    }

    ${mediaQuery.tablet} {
        flex-direction: column;
    }
`

export const StyledInputButton = styled.button<{ isDisabled: boolean }>`
    background: ${props =>
        props.isDisabled
            ? `linear-gradient(90deg, ${Swatches.background_main} 35%, ${Swatches.text_secondary} 100%)`
            : `linear-gradient(90deg, ${Swatches.background_main} 35%, ${Swatches.primary_color} 100%)`};
    position: relative;
    border-radius: 0px 4px 4px 0px;
    cursor: ${props => (props.isDisabled ? "cursor" : "pointer")};
    border: 0;
    width: 63px;

    ${mediaQuery.tablet} {
        height: 63px;
        width: 100%;
        margin: 7px auto 43px;
        border-radius: 4px;
    }

    div.fill {
        background-color: #010101;
        position: absolute;
        width: calc(100% - 1px);
        height: calc(100% - 2px);
        top: 1px;
        left: 0;
        border-radius: inherit;
        color: white;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 16px;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
            :after {
                background-image: url(${() => assetsUrl("icons/check.svg")});
            }
        }

        :after {
            display: block;
            content: "";
            width: 30px;
            height: 30px;
            background-image: url(${props =>
                assetsUrl(`icons/${props.isDisabled ? "check.svg" : "save.svg"}`)});
            background-position: center;
            background-repeat: no-repeat;

            ${mediaQuery.tablet} {
                margin-left: 10px;
            }
        }

        span.text {
            display: none;

            ${mediaQuery.tablet} {
                display: inline-block;
            }
        }
    }
`

export const StyledConnectButton = styled.button`
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
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;

    :after {
        content: "";
        width: 20px;
        margin-left: 12px;
        height: 15px;
        display: inline-block;
        background-image: url(${() => SocialMediaIcons.metamask});
        background-position: center;
        background-repeat: no-repeat;
    }

    ${mediaQuery.tablet} {
        text-align: left;
        padding: 15px 25px;
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
        display: none;
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
