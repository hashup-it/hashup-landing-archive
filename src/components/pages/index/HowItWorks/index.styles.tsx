import { assetsUrl } from "config"
import styled, { css } from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledCarouselWrapper = styled.div`
    width: calc(100% - 150px);
    margin: auto;
    margin-top: 100px;

    ${MediaQuery.tablet} {
        width: 100%;
        margin-top: 50px;
    }

    ul.alice-carousel__stage {
        display: flex;
        align-items: center;

        li {
            flex-grow: 0;
            flex-shrink: 0;
        }
    }
`

export const StyledControlButton = styled.button<{ isDisabled: boolean; isPrev?: boolean }>`
    width: 50px;
    height: 50px;
    background-color: red;
    position: relative;
    border-radius: 100%;
    background-color: black;
    border: 2px solid ${Swatches.primary_color};
    position: absolute;
    top: 50%;

    ${p =>
        p.isPrev
            ? css`
                  left: -20px;
                  transform: translate(-100%, -100%);
              `
            : css`
                  right: -20px;
                  transform: translate(100%, -100%);
              `}

    ${p =>
        p.isDisabled &&
        css`
            opacity: 0.35;
        `}

    ${MediaQuery.tablet} {
        top: auto;
        bottom: -70px;
        left: 50%;
        transform: none;

        ${p =>
            p.isPrev
                ? css`
                      transform: translateX(-150%);
                  `
                : css`
                      transform: translateX(50%);
                  `}
    }

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${() => assetsUrl("random-icons/gray-arrow.svg")});
        background-position: center;
        background-repeat: no-repeat;
        transform: ${p => (p.isPrev ? "rotate( 90deg)" : "rotate(-90deg)")};
    }

    :hover {
        cursor: pointer;
    }
`

export const StyledItem = styled.div`
    height: 100%;

    ${MediaQuery.tablet} {
        height: 100%;
        align-items: end;
    }

    div.mobile-img {
        width: 100%;
    }

    * {
        pointer-events: none;
    }
`
