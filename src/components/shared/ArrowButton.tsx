import { assetsUrl } from "config"
import Image from "next/image"
import { FC } from "react"
import styled from "styled-components"
import { Swatches } from "__styles__/consts"
import { StyledButton1 } from "./buttons.styles"

const StyledArrowButton = styled(StyledButton1)`
    border: 0;
    box-sizing: border-box;
    padding: 16px 32px 16px 32px;
    position: relative;

    :before {
        content: "";
        position: absolute;
        display: block;
        width: 32px;
        height: 2px;
        background-color: ${Swatches.primary_color};
        bottom: 0;
        transition: width 120ms ease-in-out;
    }

    :hover {
        div.arrow-wrapper {
            transform: translateX(5px);
        }
    }

    div.button-content {
        display: flex;

        div.arrow-wrapper {
            margin-left: 12px;
            transition: transform 150ms ease-in-out;
        }
    }
`

export const ArrowButton: FC<{ label: JSX.Element | string; title: string }> = ({
    label,
    title,
}) => (
    <StyledArrowButton title={title}>
        <div className="button-content">
            {label}
            <div className="arrow-wrapper">
                <Image src={assetsUrl("random-icons/red-arrow.svg")} width={20} height={20} alt="" priority />
            </div>
        </div>
    </StyledArrowButton>
)
