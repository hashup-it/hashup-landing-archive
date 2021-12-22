import styled from "styled-components"
import {
    GlobalHorizontalPadding,
    GLOBAL_CONTENT_WIDTH_PX,
    MediaQuery,
    Swatches,
} from "__styles__/consts"

export const StyledWrapper = styled.div`
    background-color: ${Swatches.background_main};
    min-height: 100vh;
    color: white;
    margin: 0 auto;
    overflow: visible;
    width: ${GLOBAL_CONTENT_WIDTH_PX}px;
    padding: 0px ${GlobalHorizontalPadding[MediaQuery.desktop]};

    ${MediaQuery.laptop} {
        width: auto;
        padding: 0px ${GlobalHorizontalPadding[MediaQuery.laptop]};
        overflow: hidden;
    }

    ${MediaQuery.laptopL} {
        width: auto;
        padding: 0px ${GlobalHorizontalPadding[MediaQuery.laptopL]};
    }

    ${MediaQuery.mobileL} {
        padding: 0px ${GlobalHorizontalPadding[MediaQuery.mobileL]};
    }
`
