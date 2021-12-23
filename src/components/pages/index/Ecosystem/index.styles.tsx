import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledIconsWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;

    ${MediaQuery.laptop} {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`

export const StyledIconBox = styled.a`
    width: 250px;
    height: 82px;
    position: relative;
    text-align: center;
    border-left: 1px solid #303030;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 100ms opacity ease;
    color: white;
    margin-top: 80px;

    ${MediaQuery.laptopM} {
        border: none;
        width: 180px;
    }

    ${MediaQuery.tablet} {
        width: 150px;
    }

    :hover {
        opacity: 0.75;
        transition: 100ms opacity ease;
    }

    :first-child {
        border-left: none;
    }

    img.icon {
        position: absolute;
        top: -25px;
    }

    div.label {
        font-size: 18px;
        font-weight: 600;
        position: absolute;
        bottom: 0;

        :after {
            content: "";
            display: block;
            width: 17px;
            height: 2px;
            background-color: ${Swatches.primary_color};
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 32px;
        }
    }
`

export const StyledImagesBox = styled.div`
    margin-top: 140px;
    position: relative;
    width: 100%;
    float: right;

    ${MediaQuery.mobileL} {
        display: none;
    }

    img.laptop {
        display: block;
        width: 115%;
        position: relative;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);

        ${MediaQuery.laptopL} {
            max-width: 105%;
        }
    }

    div.flare {
        top: 0;
        width: 600px;
        height: 700px;
        background-color: ${Swatches.primary_color};
        position: absolute;
        z-index: 0;
        filter: blur(544px);
        opacity: 0;
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
        width: 33%;
        height: 3px;
        background-color: ${Swatches.primary_color};
        top: -1px;
        position: absolute;
    }
`
