import { FC } from "react"
import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"
import Image from "next/image"

const downloadSvg = require("/public/assets/media/download-icon.svg")

export const StyledDownloadButton = styled.a`
    border-radius: 15px;
    display: flex;
    padding: 10px;
    border: 1px solid #ff3f3f;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
    gap: 20px;
    background-color: black;
    transition: opacity 100ms ease;

    :hover {
        opacity: 0.8;
        transition: opacity 100ms ease;
    }
`
export const DownloadButton: FC<{ href: string; label: string }> = ({ href, label }) => (
    <StyledDownloadButton href={href} download>
        <div className="label">{label}</div>
        <div className="icon">
            <Image src={downloadSvg} alt="" />
        </div>
    </StyledDownloadButton>
)

export const StyledTitle = styled.h2`
    font-size: 42px;
    font-weight: 700;

    ${MediaQuery.tablet} {
        font-size: 38px;
    }

    ${MediaQuery.mobileL} {
        font-size: 36px;
    }

    :before {
        content: "";
        display: block;
        width: 30px;
        height: 3px;
        background-color: ${Swatches.primary_color};
        margin-bottom: 10px;
    }
`
