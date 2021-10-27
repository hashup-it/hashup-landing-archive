import styled from 'styled-components'
import { CartridgeColor } from '../index'

export const CartridgeThumbnailContainer = styled.a<({ highlightColor: CartridgeColor })>`
    position: relative;

    border: 1px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    border-radius: 15px;

    cursor: pointer;

    color: white;
    text-decoration: none;

    text-transform: uppercase;
    text-align: center;

    font-family: Sora;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.2em;

    padding: .75em 2.5em 1em;

    :after {
        content: '';
        position: absolute;
        bottom: -.5px;
        left: calc(50% - 25px);
        border: 1px solid ${props => props.highlightColor};
        width: 50px;
    }
`
