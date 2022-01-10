import { StyledLoadingSpinner } from "components/shared/loading.styles"
import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 10px;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${MediaQuery.laptopM} {
        justify-content: center;
    }

    ${MediaQuery.tablet} {
        position: relative;
        flex-direction: column;
        gap: 35px;
        margin-top: 120px;
        margin-bottom: 0;
    }
`

export const StyledScrollDownNote = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: white;

    ${MediaQuery.laptopM} {
        display: none;
    }

    div.mouse-icon-wrapper {
        display: flex;
        align-items: center;
        margin-right: 13px;
    }

    span.text {
    }
`

export const StyledDataGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;

    ${MediaQuery.laptop} {
        justify-content: center;
    }

    ${MediaQuery.tablet} {
        flex-direction: column;
    }
`

export const StyledTokenInfo = styled.div`
    display: flex;
    gap: 44px;
    align-items: center;

    ${MediaQuery.tablet} {
        flex-direction: column;
        gap: 18px;
    }
`

export const StyledSocialMediaBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    ${MediaQuery.tablet} {
        margin-top: 55px;
        gap: 16px;
    }

    ${MediaQuery.mobileL} {
        gap: 8px;
    }

    :before {
        // Red line
        display: block;
        content: "";
        width: 2px;
        height: 18px;
        margin-right: 10px;
        background-color: ${Swatches.primary_color};

        ${MediaQuery.tablet} {
            display: none;
        }
    }

    div.icon-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: opacity 100ms ease;
        height: 16px;
        width: 16px;

        :hover {
            opacity: 0.7;
            transition: opacity 100ms ease;
        }

        ${MediaQuery.tablet} {
            margin-bottom: 0;
            height: 22px;
            width: 22px;
            padding: 5px 12px;
        }
    }
`

export const StyledTokenInfoItem = styled.div`
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    gap: 7px;

    ${StyledLoadingSpinner} {
        width: 25px;
        height: 25px;
    }
`

export const StyledTokenIcon = styled.div<{ icon: string }>`
    width: 15px;
    height: 15px;
    background: url(${props => props.icon});
    cursor: pointer;
    position: relative;
    background-position: center;
    background-size: 15px;
    background-repeat: no-repeat;

    :hover {
        > span {
            display: flex;
        }
    }
`

export const StyledCopyGroup = styled.div`
    display: flex;
    align-items: center;
    gap: inherit;
    cursor: pointer;
    position: relative;

    :hover {
        > span {
            display: flex;
        }

        > div > span {
            display: flex;
        }
    }
`

export const Tooltip = styled.span`
    display: none;
    position: absolute;
    top: -40px;
    background-color: red;
    white-space: nowrap;
    left: 50%;
    font-size: 10px;
    margin: auto;
    padding: 6px;

    transform: translateX(-50%);

    justify-content: center;
    border-radius: 6px;
    background-color: #222;
`
