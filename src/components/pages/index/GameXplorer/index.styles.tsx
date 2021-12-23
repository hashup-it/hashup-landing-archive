import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledImagesBox = styled.div`
    text-align: right;
    position: relative;

    img.red-dots-1,
    img.red-dots-2 {
        pointer-events: none;
        user-select: none;
    }

    img.red-dots-2 {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(310px, 120px);

        ${MediaQuery.laptopM} {
            width: 100%;
            bottom: 8%;
            right: 10%;
        }

        ${MediaQuery.tablet} {
            width: 110%;
            transform: translate(0);
            bottom: -12%;
            left: -40%;
        }
    }

    img.red-dots-1 {
        position: absolute;
        top: -100px;
        left: -300px;
        z-index: 999;
        width: 95%;

        ${MediaQuery.laptopM} {
            width: 85%;
            left: -35%;
            top: -15%;
        }

        ${MediaQuery.tablet} {
            z-index: 0;
            top: -11%;
            left: auto;
            right: -20%;
        }
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
