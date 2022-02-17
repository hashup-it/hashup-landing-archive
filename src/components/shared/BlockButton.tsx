import { assetsUrl } from "config"
import { FC } from "react"
import styled, { css } from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledSocialBoxA = styled.a<{ isFilled?: boolean }>`
    display: flex;
    width: 285px;
    box-sizing: border-box;
    border: 1px solid ${Swatches.primary_color};
    border-radius: 4px;
    padding: 20px 32px;
    position: relative;

    ${p =>
        p.isFilled &&
        css`
            background-color: ${Swatches.primary_color};
        `}

    ${MediaQuery.tablet} {
        padding: 16px 20px;
    }

    :hover {
        :after {
            transform: translateX(8px);
            transition: transform 150ms ease;
        }
    }

    :after {
        content: "";
        position: absolute;
        display: block;
        width: 30px;
        height: 30px;
        right: 25px;
        top: calc(50% - 8px);
        background-image: url(${() => assetsUrl("community/arrow.svg")});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        transition: transform 100ms ease;
    }

    div.icon-wrapper {
        margin-right: 18px;
        width: 25px;
        height: 30px;
        margin-top: 2px;

        img {
            width: 100%;
        }
    }

    div.title {
        width: 100%;
        position: relative;
        font-size: 24px;
        font-weight: 600;
    }

    div.label {
        font-weight: 600;
        font-size: 14px;
        margin-top: 6px;
        color: #5a5e68;

        ${p =>
            p.isFilled &&
            css`
                color: #350e0e;
            `}
    }
`

interface BlockButtonProps {
    readonly link: {
        readonly href: string
        readonly title: string
    }
    readonly isFilled?: boolean
    readonly button: {
        readonly icon?: JSX.Element
        readonly title: string
        readonly label: string
    }
}

const BlockButton: FC<BlockButtonProps> = ({ link, button, isFilled }) => (
    <StyledSocialBoxA
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        title={link.title}
        isFilled={isFilled}
    >
        {button.icon && <div className="icon-wrapper">{button.icon}</div>}
        <div className="texts-group">
            <div className="title">{button.title}</div>
            <div className="label">{button.label}</div>
        </div>
    </StyledSocialBoxA>
)

export default BlockButton
