import styled from "styled-components"
import {
    GLOBAL_CONTENT_WIDTH_PX,
    GLOBAL_HORIZONTAL_PADDING_PX,
    MediaQuery,
} from "__styles__/consts"

export const StyledContainer = styled.div`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    left: calc(-50vw + 50%);
    background-color: black;

    ${MediaQuery.mobileL} {
        min-height: auto;
    }
`

export const StyledBackgroundBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    div.desktop {
        ${MediaQuery.tablet} {
            display: none;
        }
    }

    div.mobile {
        display: none;

        ${MediaQuery.tablet} {
            display: block;
        }
    }
`

export const StyledContentBox = styled.div`
    min-height: 100vh;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 999;
    margin: auto;
    max-width: ${GLOBAL_CONTENT_WIDTH_PX}px;
    padding: 0 ${GLOBAL_HORIZONTAL_PADDING_PX}px;
    display: flex;
    align-items: center;

    ${MediaQuery.tablet} {
        display: block;
        padding: 140px ${GLOBAL_HORIZONTAL_PADDING_PX}px 100px;
        min-height: auto;
    }

    ${MediaQuery.mobileL} {
        min-height: auto;
        padding: 125px ${GLOBAL_HORIZONTAL_PADDING_PX}px 100px;
    }

    div.inner {
        z-index: 999;
        // (For high content) It prevents content from sticking to vertical borders
        padding: 80px 0;

        ${MediaQuery.laptopL} {
            padding-left: 100px;
        }

        ${MediaQuery.laptop} {
            padding-left: 100px;
        }

        ${MediaQuery.tablet} {
            padding: 0;
            width: 85%;
        }

        ${MediaQuery.mobileL} {
            width: 100%;
        }
    }
`
