import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledPlayButton = styled.button`
    margin-left: 100px;
    display: flex;
    align-items: center;
    gap: 22px;
    background-color: transparent;
    transition: opacity 100ms ease;

    ${MediaQuery.laptopM} {
        margin-left: 15px;
    }

    ${MediaQuery.laptop} {
        margin: 35px 0;
    }

    ${MediaQuery.tablet} {
        margin: 60px 0 0 0;
    }

    div.label {
        color: ${Swatches.text_main};
        font-weight: 600;
        font-size: 16px;

        ${MediaQuery.laptop} {
            font-size: 22px;
        }
    }

    :hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 100ms ease;
    }
`

export const StyledPopupWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.65);
    width: 100vw;
    height: 100vh;
    z-index: 9999999;
`

export const StyledPopupBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 78vw;
    height: 90vh;
    background-color: ${Swatches.background_main};
    border: 1px gray solid;
    border-radius: 5px;
    padding: 55px 22px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${MediaQuery.laptopM} {
        width: 90vw;
    }

    ${MediaQuery.laptop} {
        width: 95vw;
    }

    ${MediaQuery.tablet} {
        width: 99vw;
        height: 500px;
        padding: 55px 10px 20px 10px;
    }

    button.x-button {
        background-color: ${Swatches.primary_color};
        width: 35px;
        height: 35px;
        border-radius: 5px;
        color: white;
        font-size: 20px;
        line-height: 1.8;
        position: absolute;
        right: 12px;
        top: 12px;
        transition: 100ms ease opacity;

        :hover {
            cursor: pointer;
            opacity: 0.8;
            transition: 100ms ease opacity;
        }
    }
`

export const StyledPopupVideoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    /* 16:9 */

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
