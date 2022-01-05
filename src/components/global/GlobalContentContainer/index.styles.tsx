import styled from "styled-components"
import {
    GLOBAL_HORIZONTAL_PADDING_PX,
    GLOBAL_CONTENT_WIDTH_PX,
    MediaQuery,
    Swatches,
} from "__styles__/consts"

export const StyledWrapper = styled.div`
    /* background-color: ${Swatches.background_main}; */
    min-height: 100vh;
    color: white;
    margin: 0 auto;
    overflow: visible;
    max-width: ${GLOBAL_CONTENT_WIDTH_PX}px;
    box-sizing: border-box;
    padding: 0px ${GLOBAL_HORIZONTAL_PADDING_PX}px;

    ${MediaQuery.tablet} {
        overflow: hidden;
    }
`
