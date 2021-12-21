import styled from "styled-components"
import { Swatches } from "__styles__/Swatches"

export const StyledImagesBox = styled.div`
    text-align: right;
    position: relative;

    img.red-dots {
        pointer-events: none;
        user-select: none;
    }

    div.flare {
        background-color: ${Swatches.primary_color};
        width: 400px;
        height: 400px;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: -20px;
        filter: blur(250px);
        z-index: 1;
        opacity: 0.1;
    }
`
