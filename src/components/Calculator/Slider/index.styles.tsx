import { mediaQuery } from "components/MediaQuery"
import styled, { css } from "styled-components"
import { Swatches } from "__styles__/Swatches"

export const DISPLAY_VALUE_ATTRIBUTE = "data-display-value"

export const StyledSlider = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    gap: 30px;
    align-items: center;

    ${mediaQuery.laptop} {
        grid-template-columns: 1fr;
        gap: 40px 0;
    }
`

export const StyledSliderLabel = styled.span`
    font-size: 13px;
    letter-spacing: 0.11em;
    line-height: 120%;
    font-weight: normal;
    text-transform: uppercase;
    color: white;
`

export const StyledSliderWrapper = styled.div<{ dotsValues: string[] }>`
    width: 570px;

    .rc-slider-rail,
    .rc-slider-track,
    .rc-slider-step {
        height: 12px;
        border-radius: 35px;
    }

    .rc-slider-rail {
        background-color: #262228;
        padding-right: 10px;

        :after {
            // Make slider-rail longer at the end on the right side
            // because of last dot
            background-color: red;
            display: block;
            content: "";
            width: 30px;
            height: 12px;
            right: -10px;
            background-color: #262228;
            position: absolute;
            border-bottom-right-radius: 35px;
            border-top-right-radius: 35px;
        }
    }

    .rc-slider-track {
        background-color: ${Swatches.primary_color};
    }

    .rc-slider-handle {
        height: 32px;
        width: 25px;
        border-radius: 5px;
        background-color: ${Swatches.text_main};
        background-image: url("assets/icons/calculator-dollar.svg");
        background-repeat: no-repeat;
        background-position: center;
        border: 0 solid;
        box-shadow: 0px 4.7px 4.7px rgba(0, 0, 0, 0.25);
        margin-top: -10px; // Center vertically on track
        transform-style: preserve-3d;

        :before {
            // Preview (display) value above slider-handle
            // Content is dynamically passed by HTML attribute
            content: attr(${DISPLAY_VALUE_ATTRIBUTE});
            height: 32px;
            display: block;
            margin-top: -24px;
            width: 46px;
            margin-left: -10px;
            font-size: 13px;
            font-weight: bold;
            text-align: center;
            transform: translateZ(-1px);
            background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.5) 15%,
                rgba(0, 0, 0, 0.5) 85%,
                rgba(0, 0, 0, 0) 100%
            );
        }
    }

    .rc-slider-dot {
        display: none;
    }

    .rc-slider-dot:nth-child(25n),
    .rc-slider-dot:nth-child(1) {
        display: inline-block;
        width: 2.5px;
        height: 7px;
        border-radius: 15px;
        background-color: ${Swatches.primary_color};
        border: 0;
        transform: translate(5px, -4px);

        :before {
            display: block;
            margin-top: -22px;
            font-size: 12px;
            width: 60px;
            text-align: center;
            transform: translateX(-50%);
            color: #646e83;
        }
    }

    // Write apropriate values above dots
    ${props => {
        let dots: any[] = []

        // First dot
        dots.push(css`
            .rc-slider-dot:nth-child(1) {
                :before {
                    content: "${props.dotsValues[0]}";
                }
            }
        `)

        // Next 4 dots
        for (let i = 1; i <= 4; i++) {
            dots.push(css`
                .rc-slider-dot:nth-child(${25 * i}) {
                    :before {
                        content: "${props.dotsValues[i]}";
                    }
                }
            `)
        }

        return dots
    }}

    ${mediaQuery.laptop} {
        width: 100%;
    }

    ${mediaQuery.mobileL} {
        .rc-slider-dot:nth-child(${25 * 1}),
        .rc-slider-dot:nth-child(${25 * 2}),
        .rc-slider-dot:nth-child(${25 * 3}) {
            :before {
                display: none;
            }
        }
    }
`
